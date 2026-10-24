-- Karte Assist V12 — Supabase SQL Editor (executar UMA VEZ no projeto existente)
-- Reserva atomicamente cada tentativa antes de consultar o provedor de IA.
-- Aproveita a tabela public.ok_execucoes (não altera seus dados nem estrutura).
-- Não modifica ov_*, ok_conhecimento, ok_fontes, ok_historico, RLS ou Secrets.

BEGIN;

CREATE OR REPLACE FUNCTION public.ok_reservar_consulta_publica(
  p_limite_hora integer,
  p_limite_dia integer
)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_id bigint;
  v_hora integer := LEAST(GREATEST(COALESCE(p_limite_hora, 25), 1), 100);
  v_dia integer := LEAST(GREATEST(COALESCE(p_limite_dia, 100), 1), 500);
BEGIN
  -- Lock transacional: duas chamadas simultâneas não reservam a mesma cota.
  PERFORM pg_catalog.pg_advisory_xact_lock(14983126);

  IF (
    SELECT COUNT(*) FROM public.ok_execucoes
    WHERE categoria = 'demo_publica'
      AND criado_em >= pg_catalog.now() - INTERVAL '1 hour'
  ) >= v_hora OR (
    SELECT COUNT(*) FROM public.ok_execucoes
    WHERE categoria = 'demo_publica'
      AND criado_em >= pg_catalog.now() - INTERVAL '1 day'
  ) >= v_dia THEN
    RETURN NULL;
  END IF;

  INSERT INTO public.ok_execucoes (resultado, categoria)
  VALUES ('reservado', 'demo_publica')
  RETURNING id INTO v_id;

  RETURN v_id;
END;
$$;

-- A função não pode ser invocada com as chaves públicas/anônimas.
REVOKE ALL ON FUNCTION public.ok_reservar_consulta_publica(integer, integer)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.ok_reservar_consulta_publica(integer, integer)
  TO service_role;

COMMIT;

-- Conferência de leitura (não executa o limitador):
SELECT proname, prosecdef
FROM pg_catalog.pg_proc
WHERE proname = 'ok_reservar_consulta_publica';
