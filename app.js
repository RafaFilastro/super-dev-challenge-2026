// Karte Assist v7 — Frontend estático (HTML/CSS/JS), sem segredos no navegador.
// SPEC: entrada, ferramenta e fontes verificadas; idioma escolhido pelo visitante.
const EDGE_FUNCTION_URL =
  "https://tfygqhnvhvbjnknmankj.supabase.co/functions/v1/oktober-karte-assist";
const CONVERSATION_STORAGE_KEY = "karte-assist-conversation-v1";
const APP_SCREEN_STORAGE_KEY = "karte-assist-screen-v1";
const LANG_NAMES = {
  pt: "Português",
  de: "Deutsch",
  es: "Español",
  en: "English",
};
const I18N = {
  pt: {
    pageTitle: "Karte Assist — Oktoberfest Blumenau 2026",
    metaDescription:
      "Karte Assist: orientações independentes e multilíngues sobre o Oktober Karte da Oktoberfest Blumenau 2026.",
    entryTitleBefore: "Tudo sobre o seu",
    entryTitleAfter: ", no seu idioma.",
    entryFootnote: "Protótipo acadêmico independente · não oficial",
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
    scrollToBottom: "Ir para o final da conversa",
    presentation: "Modo TV",
    presentationOff: "Modo normal",
    presentationTitle: "Aumentar tamanho do chat para a TV",
    languageActionLabel: "Idioma",
    home: "Início",
    homeTitle: "Voltar à tela inicial",
    newChat: "Nova conversa",
    newChatHint: "Recomeçar",
    chatDay: "Início da conversa",
    chatHello: "Olá! 👋",
    chatWelcome:
      "Sou o Karte Assist. Posso ajudar com recarga, saldo, reembolso e dúvidas sobre o Oktober Karte. O que você gostaria de saber?",
    quickQuestions: "Ou escolha uma pergunta:",
    copyAnswer: "Copiar resposta",
    copiedAnswer: "Copiada",
    copyError: "Não foi possível copiar.",
    feedbackQuestion: "Esta resposta ajudou?",
    feedbackYes: "Sim 👍",
    feedbackNo: "Não 👎",
    feedbackThanks: "Obrigado pelo feedback!",
    feedbackFollowUpTitle: "No que posso ajudar?",
    feedbackFollowUpPrompt: "Escolha uma pergunta rápida.",
    privacySummary: "Privacidade e segurança",
    followUpTitle: "Talvez você também queira saber",
    introKicker: "SEU ASSISTENTE DO OKTOBER KARTE",
    introTitle: "Como posso ajudar com seu Oktober Karte?",
    introDescription:
      "Pergunte sobre recargas, saldo, reembolsos e problemas. Consultarei informações e mostrarei as fontes utilizadas.",
    inputLabel: "Digite sua dúvida sobre o Oktober Karte",
    inputPlaceholder: "Escreva sua dúvida sobre o Oktober Karte...",
    mobileInputPlaceholder: "Digite sua pergunta...",
    send: "Enviar pergunta",
    inputHint: "Enter para enviar · SHIFT + ENTER para nova linha",
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
    ],
  },
  de: {
    pageTitle: "Karte Assist — Oktoberfest Blumenau 2026",
    metaDescription:
      "Karte Assist: unabhängige, mehrsprachige Informationen zur Oktober Karte der Oktoberfest Blumenau 2026.",
    entryTitleBefore: "Alles über Ihre",
    entryTitleAfter: " – in Ihrer Sprache.",
    entryFootnote: "Unabhängiger akademischer Prototyp · nicht offiziell",
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
    scrollToBottom: "Zum Gesprächsende",
    presentation: "TV-Modus",
    presentationOff: "Normalansicht",
    presentationTitle: "Text für die Präsentation vergrößern",
    languageActionLabel: "Sprache",
    home: "Startseite",
    homeTitle: "Zur Startseite zurückkehren",
    newChat: "Neuer Chat",
    newChatHint: "Neu beginnen",
    chatDay: "Gesprächsbeginn",
    chatHello: "Hallo! 👋",
    chatWelcome:
      "Ich bin der Karte Assist. Ich helfe Ihnen bei Fragen zu Aufladung, Guthaben, Rückerstattung und zur Oktober Karte. Wie kann ich helfen?",
    quickQuestions: "Oder wählen Sie eine Frage:",
    copyAnswer: "Antwort kopieren",
    copiedAnswer: "Kopiert",
    copyError: "Kopieren nicht möglich.",
    feedbackQuestion: "War diese Antwort hilfreich?",
    feedbackYes: "Ja 👍",
    feedbackNo: "Nein 👎",
    feedbackThanks: "Danke für Ihr Feedback!",
    feedbackFollowUpTitle: "Wobei kann ich helfen?",
    feedbackFollowUpPrompt: "Wählen Sie eine kurze Frage.",
    privacySummary: "Datenschutz und Sicherheit",
    followUpTitle: "Das könnte Sie auch interessieren",
    introKicker: "IHR ASSISTENT FÜR DIE OKTOBER KARTE",
    introTitle: "Wie kann ich Ihnen bei Ihrer Oktober Karte helfen?",
    introDescription:
      "Fragen Sie nach Aufladung, Guthaben, Rückerstattung oder Problemen. Ich prüfe verfügbare Informationen und zeige die Quellen.",
    inputLabel: "Ihre Frage zur Oktober Karte",
    inputPlaceholder: "Stellen Sie Ihre Frage zur Oktober Karte...",
    mobileInputPlaceholder: "Frage eingeben...",
    send: "Frage senden",
    inputHint: "ENTER zum Senden · SHIFT + ENTER für eine neue Zeile",
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
    ],
  },
  es: {
    pageTitle: "Karte Assist — Oktoberfest Blumenau 2026",
    metaDescription:
      "Karte Assist: orientación independiente y multilingüe sobre la Oktober Karte del Oktoberfest Blumenau 2026.",
    entryTitleBefore: "Todo sobre tu",
    entryTitleAfter: ", en tu idioma.",
    entryFootnote: "Prototipo académico independiente · no oficial",
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
    scrollToBottom: "Ir al final de la conversación",
    presentation: "Modo TV",
    presentationOff: "Vista normal",
    presentationTitle: "Ampliar el chat para presentaciones",
    languageActionLabel: "Idioma",
    home: "Inicio",
    homeTitle: "Volver al inicio",
    newChat: "Nueva conversación",
    newChatHint: "Empezar de nuevo",
    chatDay: "Inicio de la conversación",
    chatHello: "¡Hola! 👋",
    chatWelcome:
      "Soy Karte Assist. Puedo ayudarte con recargas, saldo, reembolsos y dudas sobre la Oktober Karte. ¿Qué necesitas saber?",
    quickQuestions: "O elige una pregunta:",
    copyAnswer: "Copiar respuesta",
    copiedAnswer: "Copiada",
    copyError: "No se pudo copiar.",
    feedbackQuestion: "¿Te resultó útil esta respuesta?",
    feedbackYes: "Sí 👍",
    feedbackNo: "No 👎",
    feedbackThanks: "¡Gracias por tu opinión!",
    feedbackFollowUpTitle: "¿En qué puedo ayudarte?",
    feedbackFollowUpPrompt: "Elige una pregunta rápida.",
    privacySummary: "Privacidad y seguridad",
    followUpTitle: "Quizá también quieras saber",
    introKicker: "TU ASISTENTE DE OKTOBER KARTE",
    introTitle: "¿Cómo puedo ayudarte con tu Oktober Karte?",
    introDescription:
      "Pregunta sobre recargas, saldo, reembolsos y problemas. Consultaré la información y mostraré las fuentes.",
    inputLabel: "Escribe tu consulta sobre Oktober Karte",
    inputPlaceholder: "Escribe tu pregunta sobre Oktober Karte...",
    mobileInputPlaceholder: "Escribe tu pregunta...",
    send: "Enviar pregunta",
    inputHint: "ENTER para enviar · SHIFT + ENTER para otra línea",
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
    ],
  },
  en: {
    pageTitle: "Karte Assist — Oktoberfest Blumenau 2026",
    metaDescription:
      "Karte Assist: independent multilingual guidance about the Oktober Karte for Oktoberfest Blumenau 2026.",
    entryTitleBefore: "Everything about your",
    entryTitleAfter: ", in your language.",
    entryFootnote: "Independent academic prototype · unofficial",
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
    scrollToBottom: "Go to the end of the conversation",
    presentation: "TV mode",
    presentationOff: "Normal view",
    presentationTitle: "Enlarge the chat for presentation",
    languageActionLabel: "Language",
    home: "Home",
    homeTitle: "Back to home",
    newChat: "New conversation",
    newChatHint: "Start again",
    chatDay: "Conversation started",
    chatHello: "Hello! 👋",
    chatWelcome:
      "I’m Karte Assist. I can help with top-ups, balances, refunds and Oktober Karte questions. What would you like to know?",
    quickQuestions: "Or choose a question:",
    copyAnswer: "Copy answer",
    copiedAnswer: "Copied",
    copyError: "Could not copy.",
    feedbackQuestion: "Was this answer helpful?",
    feedbackYes: "Yes 👍",
    feedbackNo: "No 👎",
    feedbackThanks: "Thanks for your feedback!",
    feedbackFollowUpTitle: "What can I help with?",
    feedbackFollowUpPrompt: "Choose a quick question.",
    privacySummary: "Privacy and safety",
    followUpTitle: "You may also want to know",
    introKicker: "YOUR OKTOBER KARTE ASSISTANT",
    introTitle: "How can I help with your Oktober Karte?",
    introDescription:
      "Ask about top-ups, balances, refunds, or card problems. I will check available information and show the sources.",
    inputLabel: "Enter your Oktober Karte question",
    inputPlaceholder: "Ask your question about Oktober Karte...",
    mobileInputPlaceholder: "Type your question...",
    send: "Send question",
    inputHint: "ENTER to send · SHIFT + ENTER for a new line",
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
    ],
  },
};

const FOLLOW_UPS = {
  pt: {
    purchase: [
      "Quanto custa o Oktober Karte?",
      "Onde posso retirar o cartão?",
      "Preciso apresentar algum documento?",
      "Posso comprar o cartão antes de chegar à festa?",
    ],
    topup: [
      "Quais formas de pagamento são aceitas na recarga?",
      "Existe um valor mínimo para recarregar?",
      "A recarga fica disponível na hora?",
      "Onde posso fazer uma recarga durante a festa?",
    ],
    balance: [
      "O saldo do cartão expira?",
      "Como vejo meu histórico de consumo?",
      "Posso usar o saldo em qualquer ponto da festa?",
      "Como consulto meu saldo pelo celular?",
    ],
    refund: [
      "Qual é o prazo para pedir reembolso?",
      "Existe alguma taxa no reembolso?",
      "Quanto tempo leva para receber o valor?",
      "Onde encontro um terminal de autoatendimento?",
    ],
    cardIssue: [
      "Como bloquear um cartão perdido?",
      "Consigo recuperar o saldo do cartão?",
      "Posso reutilizar um cartão de outro ano?",
      "O que faço se o cartão não funcionar?",
    ],
    general: [
      "Onde o Oktober Karte é aceito?",
      "Como faço para recarregar?",
      "Como funciona o reembolso do saldo?",
      "Onde encontro atendimento durante a festa?",
    ],
  },
  de: {
    purchase: [
      "Wie viel kostet die Oktober Karte?",
      "Wo kann ich die Karte abholen?",
      "Muss ich ein Dokument vorlegen?",
      "Kann ich die Karte vor der Anreise kaufen?",
    ],
    topup: [
      "Welche Zahlungsarten werden beim Aufladen akzeptiert?",
      "Gibt es einen Mindestbetrag zum Aufladen?",
      "Ist das Guthaben sofort verfügbar?",
      "Wo kann ich während des Festes aufladen?",
    ],
    balance: [
      "Verfällt das Kartenguthaben?",
      "Wie sehe ich meinen Verbrauchsverlauf?",
      "Kann ich das Guthaben an jedem Stand nutzen?",
      "Wie prüfe ich mein Guthaben auf dem Handy?",
    ],
    refund: [
      "Bis wann kann ich eine Rückerstattung beantragen?",
      "Fällt bei der Rückerstattung eine Gebühr an?",
      "Wie lange dauert die Auszahlung?",
      "Wo finde ich einen Selbstbedienungsterminal?",
    ],
    cardIssue: [
      "Wie sperre ich eine verlorene Karte?",
      "Kann ich das Guthaben der Karte wiederherstellen?",
      "Kann ich eine Karte aus einem früheren Jahr verwenden?",
      "Was kann ich tun, wenn die Karte nicht funktioniert?",
    ],
    general: [
      "Wo wird die Oktober Karte akzeptiert?",
      "Wie kann ich die Karte aufladen?",
      "Wie funktioniert die Guthabenerstattung?",
      "Wo erhalte ich Hilfe während des Festes?",
    ],
  },
  es: {
    purchase: [
      "¿Cuánto cuesta la Oktober Karte?",
      "¿Dónde puedo retirar la tarjeta?",
      "¿Necesito presentar algún documento?",
      "¿Puedo comprar la tarjeta antes de llegar a la fiesta?",
    ],
    topup: [
      "¿Qué formas de pago aceptan para recargar?",
      "¿Existe un importe mínimo de recarga?",
      "¿La recarga queda disponible inmediatamente?",
      "¿Dónde puedo recargar durante la fiesta?",
    ],
    balance: [
      "¿El saldo de la tarjeta vence?",
      "¿Cómo consulto mi historial de consumo?",
      "¿Puedo usar el saldo en cualquier puesto?",
      "¿Cómo consulto el saldo desde el celular?",
    ],
    refund: [
      "¿Cuál es el plazo para solicitar el reembolso?",
      "¿Se cobra alguna tasa por el reembolso?",
      "¿Cuánto tarda en recibirse el importe?",
      "¿Dónde encuentro un terminal de autoservicio?",
    ],
    cardIssue: [
      "¿Cómo bloqueo una tarjeta perdida?",
      "¿Puedo recuperar el saldo de la tarjeta?",
      "¿Puedo reutilizar una tarjeta de otro año?",
      "¿Qué hago si la tarjeta no funciona?",
    ],
    general: [
      "¿Dónde aceptan la Oktober Karte?",
      "¿Cómo puedo recargarla?",
      "¿Cómo funciona el reembolso del saldo?",
      "¿Dónde puedo recibir ayuda durante la fiesta?",
    ],
  },
  en: {
    purchase: [
      "How much does an Oktober Karte cost?",
      "Where can I collect the card?",
      "Do I need to show an ID?",
      "Can I buy the card before arriving at the festival?",
    ],
    topup: [
      "Which payment methods are accepted for top-ups?",
      "Is there a minimum top-up amount?",
      "Is the balance available immediately after topping up?",
      "Where can I top up during the festival?",
    ],
    balance: [
      "Does the card balance expire?",
      "How can I see my purchase history?",
      "Can I use the balance at every festival stand?",
      "How can I check my balance on my phone?",
    ],
    refund: [
      "What is the deadline for requesting a refund?",
      "Is there a refund fee?",
      "How long does it take to receive the refund?",
      "Where can I find a self-service terminal?",
    ],
    cardIssue: [
      "How do I block a lost card?",
      "Can I recover the card balance?",
      "Can I reuse a card from a previous year?",
      "What should I do if the card does not work?",
    ],
    general: [
      "Where is the Oktober Karte accepted?",
      "How can I top up the card?",
      "How does the balance refund work?",
      "Where can I get help during the festival?",
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
  errorEl = $("errorBanner");
const charCountEl = $("charCount"),
  languageDialog = $("languageDialog"),
  followUpEl = $("followUpSuggestions"),
  followUpListEl = $("followUpList");
const presentationBtn = $("presentationBtn");
const composerArea = document.querySelector(".composer-area");
const scrollToBottomBtn = $("scrollToBottomBtn");
let readingHistory = false;
let returningToBottom = false;
let lang = "pt",
  history = [],
  transcript = [],
  conversationStartedAt = new Date().toISOString(),
  feedbackFollowUpActive = false,
  busy = false,
  threadEl = null,
  presentationMode = false,
  lastQuestion = "";
const tr = (key) => I18N[lang]?.[key] ?? I18N.pt[key] ?? key;
const formatConversationDate = (value) =>
  new Intl.DateTimeFormat(
    { pt: "pt-BR", de: "de-DE", es: "es-ES", en: "en-US" }[lang],
    { day: "numeric", month: "long", year: "numeric" },
  ).format(new Date(value));
const syncConversationDate = () => {
  const dateLabel = $("conversationDate");
  if (dateLabel)
    dateLabel.textContent = formatConversationDate(conversationStartedAt);
};
const persistConversation = () => {
  try {
    localStorage.setItem(
      CONVERSATION_STORAGE_KEY,
      JSON.stringify({
        version: 1,
        lang,
        startedAt: conversationStartedAt,
        history,
        messages: transcript,
      }),
    );
  } catch (error) {
    console.warn("Não foi possível salvar a conversa neste dispositivo.");
  }
};
const persistAppScreen = (nextScreen) => {
  try {
    localStorage.setItem(APP_SCREEN_STORAGE_KEY, nextScreen);
  } catch {
    // A navegação continua funcionando se o armazenamento não estiver disponível.
  }
};
const readSavedAppScreen = () => {
  try {
    return localStorage.getItem(APP_SCREEN_STORAGE_KEY) === "home"
      ? "home"
      : "chat";
  } catch {
    return "chat";
  }
};
const readSavedConversation = () => {
  try {
    const saved = JSON.parse(
      localStorage.getItem(CONVERSATION_STORAGE_KEY) || "null",
    );
    if (
      saved?.version !== 1 ||
      !I18N[saved.lang] ||
      !Number.isFinite(Date.parse(saved.startedAt)) ||
      !Array.isArray(saved.messages)
    )
      return null;
    return {
      lang: saved.lang,
      startedAt: saved.startedAt,
      history: Array.isArray(saved.history)
        ? saved.history
            .filter(
              (item) =>
                item &&
                (item.role === "user" || item.role === "assistant") &&
                typeof item.content === "string",
            )
            .slice(-6)
        : [],
      messages: saved.messages.filter(
        (message) =>
          message &&
          (message.role === "user" || message.role === "assistant") &&
          typeof message.content === "string",
      ),
    };
  } catch {
    return null;
  }
};
const detectDeviceLanguage = () => {
  const preferredLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const locale of preferredLanguages) {
    const primaryLanguage = String(locale || "")
      .toLowerCase()
      .split(/[-_]/)[0];
    if (I18N[primaryLanguage]) return primaryLanguage;
  }
  return "en";
};
const node = (tag, cls = "", text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
};
const bottom = () => {
  returningToBottom = true;
  readingHistory = false;
  messagesEl.parentElement?.classList.remove("reading-history");
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      messagesEl.scrollTop = messagesEl.scrollHeight;
      syncScrollToBottomButton(true);
    }),
  );
};
const syncScrollToBottomButton = (fromScroll = false) => {
  if (!messagesEl || !scrollToBottomBtn) return;
  const distanceFromBottom =
    messagesEl.scrollHeight - messagesEl.scrollTop - messagesEl.clientHeight;
  const chatPanel = messagesEl.parentElement;
  const mobile = isMobileLayout();
  if (!mobile) {
    readingHistory = false;
    returningToBottom = false;
  } else if (fromScroll) {
    if (distanceFromBottom <= 24) {
      readingHistory = false;
      returningToBottom = false;
    } else if (!returningToBottom && distanceFromBottom > 140) {
      readingHistory = true;
    }
  }
  chatPanel?.classList.toggle("reading-history", mobile && readingHistory);
  scrollToBottomBtn.hidden = mobile
    ? !readingHistory
    : distanceFromBottom < 140;
};
const chatTime = (value = new Date()) =>
  new Intl.DateTimeFormat(
    { pt: "pt-BR", de: "de-DE", es: "es-ES", en: "en-US" }[lang],
    { hour: "2-digit", minute: "2-digit" },
  ).format(new Date(value));
const isMobileLayout = () => window.matchMedia("(max-width: 820px)").matches;
const syncMobileViewport = () => {
  if (!isMobileLayout()) {
    document.documentElement.style.removeProperty("--mobile-viewport-height");
    document.documentElement.style.removeProperty(
      "--mobile-viewport-offset-top",
    );
    return;
  }
  const viewport = window.visualViewport;
  const height = Math.round(viewport?.height || window.innerHeight);
  const offsetTop = Math.max(0, Math.round(viewport?.offsetTop || 0));
  if (height > 0) {
    document.documentElement.style.setProperty(
      "--mobile-viewport-height",
      `${height}px`,
    );
    document.documentElement.style.setProperty(
      "--mobile-viewport-offset-top",
      `${offsetTop}px`,
    );
  }
};
const syncInputPlaceholder = () => {
  inputEl.placeholder = tr(
    isMobileLayout() ? "mobileInputPlaceholder" : "inputPlaceholder",
  );
};
messagesEl?.addEventListener("scroll", () => syncScrollToBottomButton(true), {
  passive: true,
});
messagesEl?.addEventListener(
  "wheel",
  () => {
    returningToBottom = false;
  },
  { passive: true },
);
messagesEl?.addEventListener(
  "touchstart",
  () => {
    returningToBottom = false;
  },
  { passive: true },
);
scrollToBottomBtn?.addEventListener("click", bottom);
const focusInputOnDesktop = () => {
  if (!isMobileLayout()) inputEl.focus({ preventScroll: true });
};
const syncMobileComposerHeight = () => {
  if (!composerArea || !isMobileLayout()) {
    document.documentElement.style.removeProperty("--mobile-composer-height");
    return;
  }
  const height = Math.ceil(composerArea.getBoundingClientRect().height);
  if (height > 0) {
    document.documentElement.style.setProperty(
      "--mobile-composer-height",
      `${height}px`,
    );
  }
};
const syncMobileFollowUpHeight = () => {
  if (!followUpEl || !isMobileLayout() || followUpEl.hidden) {
    document.documentElement.style.removeProperty("--mobile-followup-height");
    return;
  }
  const height = Math.ceil(followUpEl.getBoundingClientRect().height);
  if (height > 0) {
    document.documentElement.style.setProperty(
      "--mobile-followup-height",
      `${height}px`,
    );
  } else {
    document.documentElement.style.removeProperty("--mobile-followup-height");
  }
};
const detectQuestionTopic = (question) => {
  const normalized = String(question || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  const topics = [
    ["refund", /reembols|refund|ruckerstatt|devolu|estorn/],
    ["balance", /saldo|balance|guthaben|histori|consumo|purchase history/],
    ["topup", /recarreg|recarg|auflad|top[ -]?up|credito|credit/],
    [
      "cardIssue",
      /perd|lost|verlor|roub|stol|bloque|block|ativ|activ|antig|old|2025|reutil|reuse/,
    ],
    [
      "purchase",
      /adquir|compr|obter|obtain|buy|bekomm|kauf|consig|retir|collect|where.*get|onde|donde/,
    ],
  ];
  return (
    topics.find(([, pattern]) => pattern.test(normalized))?.[0] || "general"
  );
};
const hideFollowUpSuggestions = () => {
  if (!followUpEl || !followUpListEl) return;
  followUpEl.hidden = true;
  followUpEl.classList.remove("feedback-mode");
  feedbackFollowUpActive = false;
  followUpListEl.replaceChildren();
  syncMobileFollowUpHeight();
};
const syncFollowUpPlacement = () => {
  if (!followUpEl) return;
  if (isMobileLayout()) {
    messagesEl.parentElement.insertBefore(followUpEl, scrollToBottomBtn);
  } else {
    messagesEl.append(followUpEl);
  }
};
const renderFollowUpSuggestions = (question, feedback = false) => {
  if (!followUpEl || !followUpListEl || !question) return;
  const languageSuggestions = FOLLOW_UPS[lang] || FOLLOW_UPS.en;
  const topic = detectQuestionTopic(question);
  const questions = languageSuggestions[topic] || languageSuggestions.general;
  feedbackFollowUpActive = feedback;
  followUpEl.classList.toggle("feedback-mode", feedback);
  $("followUpHeading").textContent = tr(
    feedback ? "feedbackFollowUpTitle" : "followUpTitle",
  );
  followUpListEl.replaceChildren();
  for (const suggestion of questions.slice(0, feedback ? 4 : 3)) {
    const button = node("button", "follow-up-chip", suggestion);
    button.type = "button";
    button.addEventListener("click", () => sendQuestion(suggestion));
    followUpListEl.append(button);
  }
  syncFollowUpPlacement();
  followUpEl.hidden = false;
  requestAnimationFrame(syncMobileFollowUpHeight);
  requestAnimationFrame(bottom);
};

function applyLanguage(selected) {
  if (!I18N[selected]) return;
  lang = selected;
  document.documentElement.lang = { pt: "pt-BR", de: "de", es: "es", en: "en" }[
    selected
  ];
  document.title = tr("pageTitle");
  syncConversationDate();
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", tr("metaDescription"));
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = tr(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = tr(el.dataset.i18nPlaceholder);
  });
  syncInputPlaceholder();
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", tr(el.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", tr(el.dataset.i18nTitle));
  });
  $("selectedLanguageLabel").textContent = LANG_NAMES[lang];
  $("topLanguageLabel").textContent = LANG_NAMES[lang];
  $("welcomeMessageTime").textContent = chatTime(conversationStartedAt);
  document.querySelectorAll("[data-lang-select]").forEach((button) => {
    const isCurrentLanguage = button.dataset.langSelect === lang;
    if (isCurrentLanguage) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
  document.querySelectorAll("[data-dialog-lang]").forEach((button) => {
    const selectedLanguage = button.dataset.dialogLang === lang;
    button.setAttribute("aria-pressed", String(selectedLanguage));
    button.classList.toggle("is-current", selectedLanguage);
  });
  const promptCycle = document.querySelector(".entry-prompt-cycle");
  const currentPrompt = [...(promptCycle?.children || [])].find(
    (item) => item.lang.toLowerCase().split("-")[0] === lang,
  );
  if (
    promptCycle &&
    currentPrompt &&
    promptCycle.firstElementChild !== currentPrompt
  ) {
    promptCycle.prepend(currentPrompt);
  }
  // TV mode is disabled by default. If the presentation button is restored in HTML, this block updates its label.
  if (presentationBtn) {
    presentationBtn.querySelector("[data-i18n]").textContent = presentationMode
      ? tr("presentationOff")
      : tr("presentation");
  }
  $("sidebarLangBtn").setAttribute("aria-label", tr("dialogTitle"));
  $("closeDialogBtn").setAttribute("aria-label", tr("close"));
  $("suggestions").replaceChildren();
  const topicIcons = [
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 10h18M8 15h3m7-2v5m-2.5-2.5h5"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7.5h14a2 2 0 0 1 2 2v9H5a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h13v5"/><path d="M20 12h-5a2 2 0 0 0 0 4h5"/><circle cx="15" cy="14" r=".5"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 14 4 9l5-5"/><path d="M4 9h9a7 7 0 1 1-6.3 10"/><path d="M12 12v4m-2-2h4"/></svg>',
  ];
  for (const [index, [caption, question]] of tr("suggestions").entries()) {
    const b = node("button", "suggestion-card");
    b.type = "button";
    b.dataset.question = question;
    b.setAttribute("aria-label", question);
    const icon = node("span", "suggestion-card-icon");
    icon.innerHTML = topicIcons[index] || "›";
    b.append(
      icon,
      node("span", "suggestion-card-label", caption),
      node("span", "suggestion-card-arrow", "→"),
    );
    b.addEventListener("click", () => sendQuestion(question));
    $("suggestions").append(b);
  }
  if (lastQuestion)
    renderFollowUpSuggestions(lastQuestion, feedbackFollowUpActive);
  if (!screen.hidden) persistConversation();
}
function startChat(selected) {
  applyLanguage(selected);
  welcome.hidden = true;
  screen.hidden = false;
  document.body.classList.add("chat-open");
  languageDialog.hidden = true;
  if (!threadEl && transcript.length) {
    for (const message of transcript) {
      if (message.role === "user") {
        addUserMessage(message.content, message.at, false);
      } else {
        addAssistant({ resposta: message.content }, message.at, false);
      }
    }
  }
  if (lastQuestion) {
    renderFollowUpSuggestions(lastQuestion, feedbackFollowUpActive);
  }
  persistAppScreen("chat");
  syncConversationDate();
  persistConversation();
  refreshInput();
  requestAnimationFrame(syncMobileComposerHeight);
  focusInputOnDesktop();
}
function setupThread() {
  if (!threadEl) {
    introEl.hidden = true;
    threadEl = node("div", "thread");
    messagesEl.append(threadEl);
  }
  return threadEl;
}
function addUserMessage(
  text,
  timestamp = new Date().toISOString(),
  save = true,
) {
  const row = node("div", "message user");
  const bubble = node("div", "message-bubble");
  bubble.append(node("span", "message-text", text));
  bubble.append(node("span", "message-time", chatTime(timestamp)));
  row.append(bubble);
  setupThread().append(row);
  if (save) {
    transcript.push({ role: "user", content: text, at: timestamp });
    persistConversation();
  }
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
  return /^(?:\*{0,2})?(?:fontes?(?:\s+documentais?)?|sources?(?:\s+documents?)?|quellen|fuentes?|refer[eê]ncias?|referencias?)(?:\*{0,2})?\s*:/i.test(
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
    if (!line) continue;
    if (isSourceOnlyLine(line)) break;
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
// Detalhes técnicos recolhidos: preservam a prova de tool_use/tool_result para a banca.
function buildTrace(steps, durationMs) {
  if (!Array.isArray(steps) || steps.length === 0) return null;
  const details = node("details", "trace");
  const seconds = Number.isFinite(Number(durationMs))
    ? ` · ${(Number(durationMs) / 1000).toFixed(1)}s`
    : "";
  details.append(
    node(
      "summary",
      "",
      `${tr("technical")} (${steps.length} ${tr("stages")}${seconds})`,
    ),
  );
  const list = node("ol");
  for (const step of steps) {
    if (!step || typeof step !== "object") continue;
    const item = node("li");
    item.append(
      document.createTextNode(
        `${step.fase === "tool_use" ? tr("toolAsked") : tr("toolResult")}: `,
      ),
    );
    item.append(node("code", "", String(step.ferramenta || "tool")));
    if (step.fase === "tool_use") {
      const params =
        step.entrada && typeof step.entrada === "object" ? step.entrada : {};
      const safeParams = Object.fromEntries(
        Object.entries(params).filter(([key]) =>
          ["categoria", "motivo", "saldo", "possui_cpf"].includes(key),
        ),
      );
      if (Object.keys(safeParams).length)
        item.append(
          document.createTextNode(` · ${JSON.stringify(safeParams)}`),
        );
    } else {
      const ids = Array.isArray(step.evidencias)
        ? step.evidencias.map(String).slice(0, 12)
        : [];
      item.append(
        document.createTextNode(
          step.ok === true
            ? ids.length
              ? ` · IDs: ${ids.join(", ")}`
              : ` · ${tr("noRecords")}`
            : ` · ${tr("toolDown")}`,
        ),
      );
    }
    list.append(item);
  }
  if (!list.childElementCount) return null;
  details.append(list);
  return details;
}
function visibleAnswerText(answer) {
  const lines = [];
  for (const raw of removeUntrustedUrls(answer).split(/\r?\n/)) {
    const line = cleanEvidenceMarkers(raw.trim());
    if (isSourceOnlyLine(line)) break;
    if (!line) continue;
    const heading = line.match(/^#{1,4}\s+(.+)$/);
    const bullet = line.match(/^(?:[-*]\s+|\d+[.)]\s+)(.+)$/);
    lines.push(
      (heading ? heading[1] : bullet ? bullet[1] : line).replace(
        /\*\*(.+?)\*\*/g,
        "$1",
      ),
    );
  }
  return lines.join("\n");
}
function buildAnswerActions(answer) {
  const actions = node("div", "answer-actions");
  const copyButton = node("button", "answer-action-button", tr("copyAnswer"));
  const feedbackQuestion = node(
    "span",
    "answer-feedback-question",
    tr("feedbackQuestion"),
  );
  const yesButton = node(
    "button",
    "answer-action-button answer-feedback-button",
    tr("feedbackYes"),
  );
  const noButton = node(
    "button",
    "answer-action-button answer-feedback-button",
    tr("feedbackNo"),
  );
  const status = node("span", "answer-feedback-status");
  status.setAttribute("aria-live", "polite");
  copyButton.type = yesButton.type = noButton.type = "button";
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(answer);
      copyButton.textContent = tr("copiedAnswer");
      setTimeout(() => {
        copyButton.textContent = tr("copyAnswer");
      }, 1600);
    } catch {
      status.textContent = tr("copyError");
    }
  });
  const chooseFeedback = (helpful) => {
    yesButton.hidden = true;
    noButton.hidden = true;
    feedbackQuestion.hidden = true;
    status.textContent = helpful
      ? tr("feedbackThanks")
      : tr("feedbackFollowUpPrompt");
    if (!helpful) {
      renderFollowUpSuggestions(lastQuestion, true);
    }
  };
  yesButton.addEventListener("click", () => chooseFeedback(true));
  noButton.addEventListener("click", () => chooseFeedback(false));
  actions.append(copyButton, feedbackQuestion, yesButton, noButton, status);
  return actions;
}
function addAssistant(data, timestamp = new Date().toISOString(), save = true) {
  const row = node("div", "message assistant");
  row.append(node("span", "assistant-avatar", "K"));
  const wrap = node("div", "message-wrap");
  wrap.append(
    node("div", "assistant-title", "Karte Assist"),
    formatAnswer(data.resposta),
    buildAnswerActions(visibleAnswerText(data.resposta)),
  );
  wrap.append(node("span", "message-time assistant-time", chatTime(timestamp)));
  row.append(wrap);
  setupThread().append(row);
  if (save) {
    transcript.push({
      role: "assistant",
      content: data.resposta,
      at: timestamp,
    });
    persistConversation();
  }
  bottom();
}
function showError(message) {
  errorEl.textContent = message;
  errorEl.hidden = false;
}
function setBusy(value) {
  busy = value;
  sendBtn.disabled = value;
  document
    .querySelectorAll("[data-clear-chat]")
    .forEach((button) => (button.disabled = value));
  document
    .querySelectorAll("[data-go-home]")
    .forEach((button) => (button.disabled = value));
  inputEl.disabled = value;
  document
    .querySelectorAll(
      ".suggestions button, .follow-up-list button, [data-lang-select], [data-dialog-lang]",
    )
    .forEach((e) => (e.disabled = value));
}
function refreshInput() {
  charCountEl.textContent = `${inputEl.value.length}/500`;
  composerArea?.classList.toggle("near-limit", inputEl.value.length >= 400);
  // Antes, esta função era chamada com o chat oculto: scrollHeight=0, deixando a barra vertical visível.
  // Recalcular após abrir o chat e só exibir rolagem quando o texto ultrapassar a altura máxima.
  inputEl.style.height = "auto";
  inputEl.style.overflowY = "hidden";
  const maxHeight = isMobileLayout() ? 110 : 150;
  const styles = getComputedStyle(inputEl);
  const lineHeight = parseFloat(styles.lineHeight) || 20;
  const verticalPadding =
    (parseFloat(styles.paddingTop) || 0) +
    (parseFloat(styles.paddingBottom) || 0);
  const minHeight = Math.max(
    isMobileLayout() ? 36 : 42,
    Math.ceil(lineHeight + verticalPadding),
  );
  const contentHeight = inputEl.scrollHeight;
  inputEl.style.height = `${Math.min(Math.max(contentHeight, minHeight), maxHeight)}px`;
  inputEl.style.overflowY = contentHeight > maxHeight ? "auto" : "hidden";
}
async function sendQuestion(question) {
  const text = String(question ?? "").trim();
  if (busy || !text) return;
  if (text.length > 500) return showError(tr("maxChars"));
  syncInputPlaceholder();
  errorEl.hidden = true;
  hideFollowUpSuggestions();
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
    lastQuestion = text;
    persistConversation();
    renderFollowUpSuggestions(lastQuestion);
  } catch (error) {
    loading.remove();
    showError(
      error?.name === "AbortError"
        ? tr("timeout")
        : error?.message || tr("genericError"),
    );
    inputEl.value = text;
    refreshInput();
    if (lastQuestion) renderFollowUpSuggestions(lastQuestion);
    console.error("Falha no chat:", error?.name || "Erro");
  } finally {
    clearTimeout(timer);
    setBusy(false);
    focusInputOnDesktop();
  }
}
function clearChat() {
  if (busy) return;
  history = [];
  transcript = [];
  conversationStartedAt = new Date().toISOString();
  lastQuestion = "";
  hideFollowUpSuggestions();
  if (threadEl) threadEl.remove();
  threadEl = null;
  introEl.hidden = false;
  syncConversationDate();
  $("welcomeMessageTime").textContent = chatTime(conversationStartedAt);
  messagesEl.scrollTop = 0;
  errorEl.hidden = true;
  inputEl.value = "";
  syncInputPlaceholder();
  persistConversation();
  persistAppScreen("chat");
  refreshInput();
  focusInputOnDesktop();
}
function goHome() {
  if (busy) return;
  persistConversation();
  persistAppScreen("home");
  languageDialog.hidden = true;
  inputEl.blur();
  screen.hidden = true;
  welcome.hidden = false;
  document.body.classList.remove("chat-open");
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
inputEl.addEventListener("input", () => {
  refreshInput();
});
document
  .querySelectorAll("[data-clear-chat]")
  .forEach((button) => button.addEventListener("click", clearChat));
document
  .querySelectorAll("[data-go-home]")
  .forEach((button) => button.addEventListener("click", goHome));
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
    focusInputOnDesktop();
  }),
);

if (composerArea && "ResizeObserver" in window) {
  new ResizeObserver(syncMobileComposerHeight).observe(composerArea);
}
if (followUpEl && "ResizeObserver" in window) {
  new ResizeObserver(syncMobileFollowUpHeight).observe(followUpEl);
}
syncMobileViewport();
window.visualViewport?.addEventListener(
  "resize",
  () => {
    syncMobileViewport();
    syncMobileComposerHeight();
  },
  { passive: true },
);
window.visualViewport?.addEventListener("scroll", syncMobileViewport, {
  passive: true,
});
window.addEventListener("resize", () => {
  syncInputPlaceholder();
  refreshInput();
  syncMobileViewport();
  syncMobileComposerHeight();
  syncScrollToBottomButton();
  if (!followUpEl.hidden) syncFollowUpPlacement();
  syncMobileFollowUpHeight();
});

// TV / presentation mode intentionally disabled for now.
// If the team decides to enable it later, restore the button in index.html and uncomment the block below.
/* MODO TV DESATIVADO — código preservado até decisão da equipe.
if (presentationBtn) {
  presentationBtn.addEventListener("click", () => {
    presentationMode = !presentationMode;
    document.body.classList.toggle("presentation-mode", presentationMode);
    presentationBtn.setAttribute("aria-pressed", String(presentationMode));
  });
}
*/

const savedConversation = readSavedConversation();
if (savedConversation) {
  lang = savedConversation.lang;
  conversationStartedAt = savedConversation.startedAt;
  history = savedConversation.history;
  transcript = savedConversation.messages;
  lastQuestion =
    [...transcript].reverse().find((message) => message.role === "user")
      ?.content || "";
  if (readSavedAppScreen() === "home") applyLanguage(lang);
  else startChat(lang);
  if (!screen.hidden) bottom();
} else {
  applyLanguage(detectDeviceLanguage());
}
refreshInput();
