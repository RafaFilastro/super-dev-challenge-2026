// Karte Assist v5 — Frontend estático (HTML/CSS/JS), sem segredos no navegador.
// SPEC: entrada, ferramenta e fontes verificadas; idioma escolhido pelo visitante.
const EDGE_FUNCTION_URL =
  "https://tfygqhnvhvbjnknmankj.supabase.co/functions/v1/oktober-karte-assist";
const LANG_NAMES = {
  pt: "Português",
  de: "Deutsch",
  es: "Español",
  en: "English",
};
const I18N = {
  pt: {
    welcomeLabel: "BOAS-VINDAS",
    sideLine1: "Seu cartão.",
    sideLine2: "Sem dúvidas.",
    sidebarDescription:
      "Entenda como adquirir, ativar, recarregar, usar e solicitar reembolso do Oktober Karte.",
    languageCard: "Atendimento no seu idioma",
    howTitle: "COMO FUNCIONA",
    howOneTitle: "Você pergunta",
    howOneBody: "Escreva naturalmente no seu idioma.",
    howTwoTitle: "O agente consulta",
    howTwoBody: "Pesquisa guias e orientações verificadas.",
    howThreeTitle: "Você confere",
    howThreeBody: "Confira as respostas e as fontes.",
    independent: "Protótipo acadêmico independente",
    subtitle: "Atendimento informativo · 2026",
    ready: "Pronto para ajudar",
    presentation: "Modo TV",
    presentationOff: "Modo normal",
    presentationTitle: "Aumentar tamanho do chat para a TV",
    newChat: "Nova conversa",
    introKicker: "SEU ASSISTENTE DO OKTOBER KARTE",
    introTitle: "Como posso ajudar com seu Oktober Karte?",
    introDescription:
      "Pergunte sobre recargas, saldo, reembolsos e problemas. Consultarei informações e mostrarei as fontes utilizadas.",
    inputLabel: "Digite sua dúvida sobre o Oktober Karte",
    inputPlaceholder: "Escreva sua dúvida sobre o Oktober Karte...",
    send: "Enviar pergunta",
    inputHint: "Enter para enviar · Shift+Enter para nova linha",
    disclaimer:
      "Protótipo não oficial. Não informe CPF, senhas ou dados bancários. Não consulta saldos pessoais nem executa reembolsos.",
    dialogEyebrow: "PREFERÊNCIAS",
    dialogTitle: "Escolha o idioma",
    dialogNote:
      "Você pode alterar o idioma sem perder sua conversa. As próximas respostas seguirão a nova escolha.",
    source: "Fonte documental:",
    sources: "Fontes documentais:",
    historical: "Referência histórica (não confirmada para 2026):",
    moreSources: "outras fontes",
    moreSource: "outra fonte",
    technical: "Detalhes técnicos da consulta",
    stages: "etapas",
    toolAsked: "Solicitou",
    toolResult: "Resultado",
    noRecords: "sem registros",
    toolDown: "consulta indisponível",
    loading: "Consultando informações",
    emptyAnswer: "Não foi possível preparar a resposta.",
    maxChars: "A pergunta deve ter até 500 caracteres.",
    authError:
      "A função ainda exige autenticação. Revise Verify JWT no Supabase.",
    limitError: "Limite temporário atingido. Tente mais tarde.",
    genericError: "Não foi possível consultar o agente agora.",
    responseError: "Resposta em formato inesperado.",
    timeout: "A consulta demorou demais. Tente novamente.",
    close: "Fechar",
    suggestions: [
      ["Onde adquirir?", "Onde consigo adquirir um Oktober Karte?"],
      ["Como recarregar?", "Como posso recarregar meu Oktober Karte?"],
      ["Consultar saldo", "Onde consulto o saldo do meu Oktober Karte?"],
      ["Pedir reembolso", "Tenho R$ 150 de saldo. Como solicitar reembolso?"],
      ["Perdi o cartão", "Perdi meu Oktober Karte. O que devo fazer?"],
      ["Cartão antigo", "Posso reutilizar meu cartão de 2025 em 2026?"],
    ],
  },
  de: {
    welcomeLabel: "WILLKOMMEN",
    sideLine1: "Ihre Karte.",
    sideLine2: "Alle Antworten.",
    sidebarDescription:
      "Erfahren Sie, wie Sie die Oktober Karte erhalten, aktivieren, aufladen, nutzen und eine Rückerstattung beantragen.",
    languageCard: "Beratung in Ihrer Sprache",
    howTitle: "SO FUNKTIONIERT ES",
    howOneTitle: "Sie fragen",
    howOneBody: "Schreiben Sie ganz natürlich.",
    howTwoTitle: "Die KI recherchiert",
    howTwoBody: "Sie prüft verfügbare Quellen.",
    howThreeTitle: "Sie überprüfen",
    howThreeBody: "Sie erhalten Hinweise mit Quellen.",
    independent: "Unabhängiger akademischer Prototyp",
    subtitle: "Informationsservice · 2026",
    ready: "Bereit zu helfen",
    presentation: "TV-Modus",
    presentationOff: "Normalansicht",
    presentationTitle: "Text für die Präsentation vergrößern",
    newChat: "Neuer Chat",
    introKicker: "IHR ASSISTENT FÜR DIE OKTOBER KARTE",
    introTitle: "Wie kann ich Ihnen bei Ihrer Oktober Karte helfen?",
    introDescription:
      "Fragen Sie nach Aufladung, Guthaben, Rückerstattung oder Problemen. Ich prüfe verfügbare Informationen und zeige die Quellen.",
    inputLabel: "Ihre Frage zur Oktober Karte",
    inputPlaceholder: "Stellen Sie Ihre Frage zur Oktober Karte...",
    send: "Frage senden",
    inputHint: "Enter zum Senden · Shift+Enter für neue Zeile",
    disclaimer:
      "Unabhängiger Prototyp. Bitte keine CPF, Passwörter oder Bankdaten eingeben. Kein Zugriff auf Kartenkonten und keine Rückerstattungen.",
    dialogEyebrow: "EINSTELLUNGEN",
    dialogTitle: "Sprache wählen",
    dialogNote:
      "Sie können die Sprache ändern, ohne den Chat zu löschen. Weitere Antworten erfolgen in der gewählten Sprache.",
    source: "Dokumentationsquelle:",
    sources: "Dokumentationsquellen:",
    historical: "Historische Quelle (für 2026 nicht bestätigt):",
    moreSources: "weitere Quellen",
    moreSource: "weitere Quelle",
    technical: "Technische Details der Abfrage",
    stages: "Schritte",
    toolAsked: "Aufruf",
    toolResult: "Ergebnis",
    noRecords: "keine Einträge",
    toolDown: "Quelle nicht verfügbar",
    loading: "Informationen werden geprüft",
    emptyAnswer: "Die Antwort konnte nicht dargestellt werden.",
    maxChars: "Maximal 500 Zeichen pro Frage.",
    authError:
      "Die Funktion erfordert noch Authentifizierung. Prüfen Sie Verify JWT in Supabase.",
    limitError: "Zu viele Anfragen. Bitte später erneut versuchen.",
    genericError: "Der Assistent ist momentan nicht erreichbar.",
    responseError: "Unerwartetes Antwortformat.",
    timeout: "Die Abfrage dauerte zu lange. Bitte erneut versuchen.",
    close: "Schließen",
    suggestions: [
      ["Wo bekomme ich die Karte?", "Wo bekomme ich eine Oktober Karte?"],
      ["Karte aufladen", "Wie lade ich meine Oktober Karte auf?"],
      ["Guthaben prüfen", "Wo kann ich mein Guthaben prüfen?"],
      ["Rückerstattung", "Wie bekomme ich 150 Real Restguthaben zurück?"],
      [
        "Karte verloren",
        "Ich habe meine Oktober Karte verloren. Was soll ich tun?",
      ],
      [
        "Alte Karte",
        "Kann ich meine Oktober Karte aus dem Jahr 2025 wieder benutzen?",
      ],
    ],
  },
  es: {
    welcomeLabel: "BIENVENIDOS",
    sideLine1: "Tu tarjeta.",
    sideLine2: "Sin dudas.",
    sidebarDescription:
      "Descubre cómo obtener, activar, recargar, utilizar la Oktober Karte y solicitar reembolsos.",
    languageCard: "Atención en tu idioma",
    howTitle: "CÓMO FUNCIONA",
    howOneTitle: "Tú preguntas",
    howOneBody: "Escribe naturalmente en tu idioma.",
    howTwoTitle: "El agente consulta",
    howTwoBody: "Busca guías y fuentes verificadas.",
    howThreeTitle: "Tú compruebas",
    howThreeBody: "Revisa las respuestas y sus fuentes.",
    independent: "Prototipo académico independiente",
    subtitle: "Servicio informativo · 2026",
    ready: "Listo para ayudar",
    presentation: "Modo TV",
    presentationOff: "Vista normal",
    presentationTitle: "Ampliar el chat para presentaciones",
    newChat: "Nueva conversación",
    introKicker: "TU ASISTENTE DE OKTOBER KARTE",
    introTitle: "¿Cómo puedo ayudarte con tu Oktober Karte?",
    introDescription:
      "Pregunta sobre recargas, saldo, reembolsos y problemas. Consultaré la información y mostraré las fuentes.",
    inputLabel: "Escribe tu consulta sobre Oktober Karte",
    inputPlaceholder: "Escribe tu pregunta sobre Oktober Karte...",
    send: "Enviar pregunta",
    inputHint: "Enter para enviar · Shift+Enter para otra línea",
    disclaimer:
      "Prototipo no oficial. No compartas CPF, contraseñas ni datos bancarios. No consulta saldos individuales ni realiza reembolsos.",
    dialogEyebrow: "PREFERENCIAS",
    dialogTitle: "Elige el idioma",
    dialogNote:
      "Puedes cambiar el idioma sin perder la conversación. Las siguientes respuestas usarán el idioma elegido.",
    source: "Fuente documental:",
    sources: "Fuentes documentales:",
    historical: "Referencia histórica (sin confirmar para 2026):",
    moreSources: "fuentes más",
    moreSource: "fuente más",
    technical: "Detalles técnicos de la consulta",
    stages: "pasos",
    toolAsked: "Solicitud",
    toolResult: "Resultado",
    noRecords: "sin registros",
    toolDown: "consulta no disponible",
    loading: "Consultando información",
    emptyAnswer: "No fue posible mostrar la respuesta.",
    maxChars: "La pregunta debe tener un máximo de 500 caracteres.",
    authError:
      "La función aún requiere autenticación. Revisa Verify JWT en Supabase.",
    limitError: "Límite temporal de consultas alcanzado.",
    genericError: "No se pudo consultar al asistente.",
    responseError: "La respuesta tiene un formato inesperado.",
    timeout: "La consulta tardó demasiado. Vuelve a intentarlo.",
    close: "Cerrar",
    suggestions: [
      ["¿Dónde la consigo?", "¿Dónde puedo obtener una Oktober Karte?"],
      ["Recargar", "¿Cómo puedo recargar mi Oktober Karte?"],
      [
        "Consultar saldo",
        "¿Dónde puedo consultar el saldo de mi Oktober Karte?",
      ],
      ["Reembolso", "Tengo 150 reales de saldo. ¿Cómo solicito un reembolso?"],
      ["Tarjeta perdida", "Perdí mi Oktober Karte. ¿Qué debo hacer?"],
      ["Tarjeta anterior", "¿Puedo reutilizar mi Oktober Karte de 2025?"],
    ],
  },
  en: {
    welcomeLabel: "WELCOME",
    sideLine1: "Your card.",
    sideLine2: "No worries.",
    sidebarDescription:
      "Find out how to get, activate, top up, use, and request refunds for your Oktober Karte.",
    languageCard: "Support in your language",
    howTitle: "HOW IT WORKS",
    howOneTitle: "You ask",
    howOneBody: "Ask naturally in your own language.",
    howTwoTitle: "The agent checks",
    howTwoBody: "It looks up verified guidance.",
    howThreeTitle: "You verify",
    howThreeBody: "See the guidance and its sources.",
    independent: "Independent academic prototype",
    subtitle: "Information service · 2026",
    ready: "Ready to help",
    presentation: "TV mode",
    presentationOff: "Normal view",
    presentationTitle: "Enlarge the chat for presentation",
    newChat: "New conversation",
    introKicker: "YOUR OKTOBER KARTE ASSISTANT",
    introTitle: "How can I help with your Oktober Karte?",
    introDescription:
      "Ask about top-ups, balances, refunds, or card problems. I will check available information and show the sources.",
    inputLabel: "Enter your Oktober Karte question",
    inputPlaceholder: "Ask your question about Oktober Karte...",
    send: "Send question",
    inputHint: "Enter to send · Shift+Enter for a new line",
    disclaimer:
      "Unofficial prototype. Do not share CPF numbers, passwords, or banking details. No access to personal balances or refunds.",
    dialogEyebrow: "PREFERENCES",
    dialogTitle: "Choose a language",
    dialogNote:
      "You can change languages without losing your chat. Future answers will follow your chosen language.",
    source: "Document source:",
    sources: "Document sources:",
    historical: "Historical reference (not verified for 2026):",
    moreSources: "more sources",
    moreSource: "more source",
    technical: "Technical query details",
    stages: "steps",
    toolAsked: "Requested",
    toolResult: "Result",
    noRecords: "no records",
    toolDown: "query unavailable",
    loading: "Checking information",
    emptyAnswer: "The answer could not be displayed.",
    maxChars: "Questions can contain up to 500 characters.",
    authError:
      "The function still requires authentication. Check Verify JWT in Supabase.",
    limitError: "Temporary request limit reached.",
    genericError: "Unable to reach the assistant right now.",
    responseError: "Unexpected response format.",
    timeout: "The request took too long. Please try again.",
    close: "Close",
    suggestions: [
      ["Get a card", "Where can I get an Oktober Karte?"],
      ["Top up", "How can I top up my Oktober Karte?"],
      ["Check balance", "Where can I check my Oktober Karte balance?"],
      ["Refund", "I have R$150 left. How can I get a refund?"],
      ["Lost my card", "I lost my Oktober Karte. What should I do?"],
      ["Old card", "Can I reuse my 2025 Oktober Karte?"],
    ],
  },
};

const $ = (id) => document.getElementById(id);
const welcome = $("welcomeScreen"),
  screen = $("chatScreen"),
  messagesEl = $("messages"),
  introEl = $("intro");
const formEl = $("chatForm"),
  inputEl = $("question"),
  sendBtn = $("sendBtn"),
  clearBtn = $("clearBtn"),
  errorEl = $("errorBanner");
const charCountEl = $("charCount"),
  languageDialog = $("languageDialog");
const presentationBtn = $("presentationBtn");
let lang = "pt",
  history = [],
  busy = false,
  threadEl = null,
  presentationMode = false;
const tr = (key) => I18N[lang]?.[key] ?? I18N.pt[key] ?? key;
const node = (tag, cls = "", text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
};
const bottom = () => {
  messagesEl.scrollTop = messagesEl.scrollHeight;
};

function applyLanguage(selected) {
  if (!I18N[selected]) return;
  lang = selected;
  document.documentElement.lang = { pt: "pt-BR", de: "de", es: "es", en: "en" }[
    selected
  ];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = tr(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = tr(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", tr(el.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", tr(el.dataset.i18nTitle));
  });
  $("selectedLanguageLabel").textContent = LANG_NAMES[lang];
  $("topLanguageLabel").textContent = LANG_NAMES[lang];
  // TV mode is disabled by default. If the presentation button is restored in HTML, this block updates its label.
  if (presentationBtn) {
    presentationBtn.querySelector("[data-i18n]").textContent = presentationMode
      ? tr("presentationOff")
      : tr("presentation");
  }
  $("sidebarLangBtn").setAttribute("aria-label", tr("dialogTitle"));
  $("closeDialogBtn").setAttribute("aria-label", tr("close"));
  $("suggestions").replaceChildren();
  for (const [caption, question] of tr("suggestions")) {
    const b = node("button", "", caption);
    b.type = "button";
    b.dataset.question = question;
    b.addEventListener("click", () => sendQuestion(question));
    $("suggestions").append(b);
  }
}
function startChat(selected) {
  applyLanguage(selected);
  welcome.hidden = true;
  screen.hidden = false;
  languageDialog.hidden = true;
  refreshInput();
  inputEl.focus({ preventScroll: true });
}
function setupThread() {
  if (!threadEl) {
    introEl.hidden = true;
    threadEl = node("div", "thread");
    messagesEl.append(threadEl);
  }
  return threadEl;
}
function addUserMessage(text) {
  const row = node("div", "message user");
  row.append(node("div", "message-bubble", text));
  setupThread().append(row);
  bottom();
}
function addLoading() {
  const row = node("div", "message assistant");
  row.append(node("span", "assistant-avatar", "K"));
  const wrap = node("div", "message-wrap");
  wrap.append(node("div", "assistant-title", "Karte Assist"));
  const loader = node("div", "typing");
  loader.setAttribute("role", "status");
  loader.setAttribute("aria-label", tr("loading"));
  for (let i = 0; i < 3; i++) loader.append(node("i"));
  wrap.append(loader);
  row.append(wrap);
  setupThread().append(row);
  bottom();
  return row;
}
function removeUntrustedUrls(value) {
  return String(value ?? "")
    .replace(/\[([^\]]+)\]\(https?:\/\/[^\s)]+\)/gi, "$1")
    .replace(/https?:\/\/[^\s)\]]+/gi, "");
}
function cleanEvidenceMarkers(line) {
  return line
    .replace(
      /\b(?:conforme|segundo|according to|laut)\s+\*{0,2}OK-\d{3}\*{0,2}/gi,
      "",
    )
    .replace(/\*{0,2}\b(?:OK-\d{3}|HIST-\d{2,3})\b\*{0,2}/gi, "")
    .replace(/\(\s*\)|\[\s*\]/g, "")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}
function isSourceOnlyLine(line) {
  return /^(?:\*{0,2})?(?:fontes?|sources?|quellen|fuentes?|refer[eê]ncias?|referencias?)(?:\*{0,2})?\s*:/i.test(
    line,
  );
}
function inline(parent, text) {
  for (const part of text.split(/(\*\*[^*]+\*\*)/g)) {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4)
      parent.append(node("strong", "", part.slice(2, -2)));
    else parent.append(document.createTextNode(part));
  }
}
function formatAnswer(answer) {
  const box = node("div", "answer");
  for (const raw of removeUntrustedUrls(answer).split(/\r?\n/)) {
    const line = cleanEvidenceMarkers(raw.trim());
    if (!line || isSourceOnlyLine(line)) continue;
    const heading = line.match(/^#{1,4}\s+(.+)$/),
      bullet = line.match(/^(?:[-*]\s+|\d+[.)]\s+)(.+)$/);
    const e = node(heading ? "h3" : "p", bullet ? "line-bullet" : "");
    inline(e, heading ? heading[1] : bullet ? bullet[1] : line);
    box.append(e);
  }
  if (!box.children.length) box.append(node("p", "", tr("emptyAnswer")));
  return box;
}
function safeSourceUrl(value) {
  try {
    const u = new URL(String(value));
    const allow = new Set([
      "oktoberfestblumenau.com.br",
      "www.oktoberfestblumenau.com.br",
      "blumenau.sc.gov.br",
      "www.blumenau.sc.gov.br",
    ]);
    return u.protocol === "https:" && allow.has(u.hostname) ? u.href : null;
  } catch {
    return null;
  }
}
function buildSources(sources) {
  const unique = new Map();
  for (const s of Array.isArray(sources) ? sources : []) {
    if (!s || typeof s !== "object") continue;
    const url = safeSourceUrl(s.url);
    if (!url || unique.has(url)) continue;
    const year = Number(s.edicao || 2026);
    const archived = s.historica === true || year !== 2026;
    const publisher = new URL(url).hostname.includes("blumenau.sc.gov.br")
      ? "Prefeitura de Blumenau"
      : "Oktoberfest Blumenau";
    unique.set(url, {
      url,
      publisher,
      archived,
      year,
      title: String(s.titulo || ""),
    });
  }
  const docs = [...unique.values()];
  if (!docs.length) return null;
  docs.sort((a, b) => Number(a.archived) - Number(b.archived));
  const box = node("div", "source-footnote");
  const current = docs.some((d) => !d.archived);
  box.append(
    node(
      "span",
      "source-footnote-label",
      current ? tr("source") : tr("historical"),
    ),
  );
  const first = docs[0],
    link = node(
      "a",
      "source-primary-link",
      `${first.publisher} · ${first.year} ↗`,
    );
  link.href = first.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  box.append(link);
  if (docs.length > 1) {
    const more = node("details", "source-more");
    more.append(
      node(
        "summary",
        "",
        `+ ${docs.length - 1} ${tr(docs.length === 2 ? "moreSource" : "moreSources")}`,
      ),
    );
    const ul = node("ul");
    for (const d of docs.slice(1)) {
      const li = node("li");
      const a = node("a", "", `${d.publisher} · ${d.year} — ${d.title} ↗`);
      a.href = d.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.append(a);
      ul.append(li);
    }
    more.append(ul);
    box.append(more);
  }
  return box;
}
function buildTrace(steps, duration) {
  if (!Array.isArray(steps) || !steps.length) return null;
  const box = node("details", "trace");
  const seconds = Number.isFinite(Number(duration))
    ? ` · ${(Number(duration) / 1000).toFixed(1)}s`
    : "";
  box.append(
    node(
      "summary",
      "",
      `${tr("technical")} (${steps.length} ${tr("stages")}${seconds})`,
    ),
  );
  const list = node("ol");
  for (const s of steps) {
    if (!s || typeof s !== "object") continue;
    const li = node("li");
    li.append(
      document.createTextNode(
        `${s.fase === "tool_use" ? tr("toolAsked") : tr("toolResult")}: `,
      ),
    );
    li.append(node("code", "", String(s.ferramenta ?? "tool")));
    if (s.fase === "tool_use") {
      const params =
        s.entrada && typeof s.entrada === "object" ? s.entrada : {};
      const allowed = Object.fromEntries(
        Object.entries(params).filter(([key]) =>
          ["categoria", "motivo", "saldo", "possui_cpf"].includes(key),
        ),
      );
      if (Object.keys(allowed).length)
        li.append(document.createTextNode(` · ${JSON.stringify(allowed)}`));
    } else {
      const ids = Array.isArray(s.evidencias) ? s.evidencias.map(String) : [];
      li.append(
        document.createTextNode(
          s.ok === true
            ? ` · OK${ids.length ? ` · IDs: ${ids.join(", ")}` : ` · ${tr("noRecords")}`}`
            : ` · ${tr("toolDown")}`,
        ),
      );
    }
    list.append(li);
  }
  box.append(list);
  return box;
}
function addAssistant(data) {
  const row = node("div", "message assistant");
  row.append(node("span", "assistant-avatar", "K"));
  const wrap = node("div", "message-wrap");
  wrap.append(
    node("div", "assistant-title", "Karte Assist"),
    formatAnswer(data.resposta),
  );
  const sources = buildSources(data.fontes);
  if (sources) wrap.append(sources);
  const trace = buildTrace(data.passos, data.duracao_ms);
  if (trace) wrap.append(trace);
  row.append(wrap);
  setupThread().append(row);
  bottom();
}
function showError(message) {
  errorEl.textContent = message;
  errorEl.hidden = false;
}
function setBusy(value) {
  busy = value;
  sendBtn.disabled = value;
  clearBtn.disabled = value;
  inputEl.disabled = value;
  document
    .querySelectorAll(
      ".suggestions button, [data-lang-select], [data-dialog-lang]",
    )
    .forEach((e) => (e.disabled = value));
}
function refreshInput() {
  charCountEl.textContent = `${inputEl.value.length}/500`;
  // Antes, esta função era chamada com o chat oculto: scrollHeight=0, deixando a barra vertical visível.
  // Recalcular após abrir o chat e só exibir rolagem quando o texto ultrapassar a altura máxima.
  inputEl.style.height = "auto";
  inputEl.style.overflowY = "hidden";
  const maxHeight = 150;
  const styles = getComputedStyle(inputEl);
  const lineHeight = parseFloat(styles.lineHeight) || 20;
  const verticalPadding =
    (parseFloat(styles.paddingTop) || 0) +
    (parseFloat(styles.paddingBottom) || 0);
  const minHeight = Math.max(42, Math.ceil(lineHeight + verticalPadding));
  const contentHeight = inputEl.scrollHeight;
  inputEl.style.height = `${Math.min(Math.max(contentHeight, minHeight), maxHeight)}px`;
  inputEl.style.overflowY = contentHeight > maxHeight ? "auto" : "hidden";
}
async function sendQuestion(question) {
  const text = String(question ?? "").trim();
  if (busy || !text) return;
  if (text.length > 500) return showError(tr("maxChars"));
  errorEl.hidden = true;
  const context = history.slice(-6);
  addUserMessage(text);
  const loading = addLoading();
  setBusy(true);
  inputEl.value = "";
  refreshInput();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 45000);
  try {
    const response = await fetch(EDGE_FUNCTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pergunta: text,
        historico: context,
        idioma_preferido: lang,
      }),
      signal: controller.signal,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (response.status === 401 || response.status === 403)
        throw new Error(tr("authError"));
      if (response.status === 429) throw new Error(tr("limitError"));
      throw new Error(
        typeof data.erro === "string" ? data.erro : tr("genericError"),
      );
    }
    if (typeof data.resposta !== "string") throw new Error(tr("responseError"));
    loading.remove();
    addAssistant(data);
    history.push(
      { role: "user", content: text },
      { role: "assistant", content: data.resposta },
    );
    history = history.slice(-6);
  } catch (error) {
    loading.remove();
    showError(
      error?.name === "AbortError"
        ? tr("timeout")
        : error?.message || tr("genericError"),
    );
    inputEl.value = text;
    refreshInput();
    console.error("Falha no chat:", error?.name || "Erro");
  } finally {
    clearTimeout(timer);
    setBusy(false);
    inputEl.focus();
  }
}
function clearChat() {
  if (busy) return;
  history = [];
  if (threadEl) threadEl.remove();
  threadEl = null;
  introEl.hidden = false;
  errorEl.hidden = true;
  inputEl.value = "";
  refreshInput();
  inputEl.focus();
}
function openLanguageDialog() {
  if (busy) return;
  languageDialog.hidden = false;
  $("closeDialogBtn").focus();
}
function closeLanguageDialog() {
  languageDialog.hidden = true;
  $("languageBtn").focus();
}
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  sendQuestion(inputEl.value);
});
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
    e.preventDefault();
    sendQuestion(inputEl.value);
  }
});
inputEl.addEventListener("input", refreshInput);
clearBtn.addEventListener("click", clearChat);
document
  .querySelectorAll("[data-lang-select]")
  .forEach((b) =>
    b.addEventListener("click", () => startChat(b.dataset.langSelect)),
  );
$("languageBtn").addEventListener("click", openLanguageDialog);
$("sidebarLangBtn").addEventListener("click", openLanguageDialog);
$("closeDialogBtn").addEventListener("click", closeLanguageDialog);
languageDialog.addEventListener("click", (e) => {
  if (e.target === languageDialog) closeLanguageDialog();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !languageDialog.hidden) closeLanguageDialog();
});
document.querySelectorAll("[data-dialog-lang]").forEach((b) =>
  b.addEventListener("click", () => {
    applyLanguage(b.dataset.dialogLang);
    languageDialog.hidden = true;
    inputEl.focus();
  }),
);

// TV / presentation mode intentionally disabled for now.
// If the team decides to enable it later, restore the button in index.html and uncomment the block below.
    if(presentationBtn){
        presentationBtn.addEventListener('click',()=>{
        presentationMode=!presentationMode;
        document.body.classList.toggle('presentation-mode',presentationMode);
        presentationBtn.querySelector('[data-i18n]').textContent=presentationMode?tr('presentationOff'):tr('presentation');
        presentationBtn.setAttribute('aria-pressed',String(presentationMode));
    });
    }

applyLanguage("pt");
refreshInput();
