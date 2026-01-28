// =============================================================
// 1. DADOS INTELIGENTES (ÍNDICE REMISSIVO)
// =============================================================
const pdfData = {
  norma: {
    title: "Norma de Controle de Jornada",
    filename: "Norma.pdf",
    pages: {
      1: "Visão geral, conceitos e definições.",
      3: "Intervalos: intrajornada e interjornada (regra geral).",
      4: "Responsabilidades e vedações (empregados).",
      5: "Responsabilidades e atuação (gestores / RH).",
      8: "Flexibilidade e regra do intervalo mínimo (ex.: 1h).",
      10: "Banco de horas: validade e compensações.",
      14: "Troca de serviço: limites e antecedência.",
      16: "Vedações: banco paralelo e compensação indevida.",
    },
  },
  manual: {
    title: "Manual de Ponto Eletrônico",
    // IMPORTANTE: em servidores Linux (case-sensitive), o nome deve bater 100%
    filename: "Manual.pdf",
    pages: {
      4: "Responsabilidades: empregado deve conferir/assinar a folha.",
      5: "Gestor: validar folha e tratar ocorrências no prazo.",
      7: "Esquecimento: limite de ajustes manuais por mês.",
      12: "Compensação: saldo + (até 6 meses) e saldo - (mês seguinte).",
      13: "Banco de horas: prazos e limites operacionais.",
      28: "Contatos/canais de suporte (núcleos).",
    },
  },
  acordo: {
    title: "Acordo Coletivo 2024/2026",
    filename: "Acordo.pdf",
    pages: {
      3: "Ajuda de custo (regras e valores) e situações excepcionais.",
      11: "Ausências justificadas (ex.: interesse pessoal – limites).",
      15: "Jornada, adicionais e regras gerais (inclui escalas).",
      16: "Indenização de intervalo em escalas e regras correlatas.",
      30: "Permuta/troca de serviço: regras oficiais.",
    },
  },
  cartilha: {
    title: "Cartilha — ACT 2024/2026 (SINDÁGUA/RN)",
    filename: "Cartilha.pdf",
    pages: {
      2: "Apresentação e orientação de acesso ao ACT.",
      3: "Sumário/índice das cláusulas e temas.",
      4: "Reajuste salarial e benefícios (início).",
    },
  },
};

// =============================================================
// 2. FAQ - PERGUNTAS FREQUENTES (DEZENAS DE ITENS)
// =============================================================
const faqItems = [
  // Banco de horas / compensação
  {
    q: "Qual o prazo para compensar Banco de Horas?",
    a: "Saldo positivo: até 6 meses. Saldo negativo: até o mês seguinte. <span class='cite-badge' data-pdf='manual' data-page='12'>Manual Pág. 12</span>",
    tags: ["banco", "prazo", "compensação", "saldo"],
  },
  {
    q: "Posso compensar banco de horas “por fora”, sem registrar no sistema?",
    a: "Não. Compensação paralela/banco paralelo é vedado. Sempre registre e siga o fluxo oficial. <span class='cite-badge' data-pdf='norma' data-page='16'>Norma (Vedações)</span>",
    tags: ["banco", "paralelo", "vedação"],
  },
  {
    q: "Saldo negativo pode acumular por vários meses?",
    a: "Não é o recomendado: a regra é compensar até o mês seguinte à ocorrência. <span class='cite-badge' data-pdf='manual' data-page='12'>Manual Pág. 12</span>",
    tags: ["saldo", "negativo", "prazo"],
  },
  {
    q: "Quem deve combinar/autorizar a compensação do banco de horas?",
    a: "Deve ser acordado com a chefia/gestor e executado no sistema, respeitando regras e prazos do normativo e do manual.",
    tags: ["autorização", "chefia", "banco"],
  },

  // Intervalos (intra / inter)
  {
    q: "Qual é a regra geral da interjornada?",
    a: "Em regra, deve haver descanso mínimo de 11h entre jornadas. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Pág. 3</span>",
    tags: ["interjornada", "11h", "descanso"],
  },
  {
    q: "Qual é a regra geral da intrajornada em jornada administrativa?",
    a: "Em regra, o intervalo intrajornada deve ser de 1h a 2h, conforme previsto no normativo aplicável. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Pág. 3</span>",
    tags: ["intrajornada", "almoço", "intervalo"],
  },
  {
    q: "Posso fazer apenas 1h de almoço?",
    a: "Em alguns regimes há flexibilidade para intervalo mínimo de 1h, quando previsto e autorizado conforme norma. <span class='cite-badge' data-pdf='norma' data-page='8'>Norma (Flexibilidade)</span>",
    tags: ["almoço", "intrajornada", "redução"],
  },
  {
    q: "O que acontece se eu não fizer o intervalo completo?",
    a: "Além do risco de irregularidade no ponto, pode haver caracterização de descumprimento de norma e necessidade de tratativa pelo gestor/RH. Sempre registre corretamente e trate ocorrências de imediato.",
    tags: ["intervalo", "descumprimento", "irregularidade"],
  },

  // Escalas e indenização de intervalo
  {
    q: "Qual o intervalo em escala 12x36?",
    a: "Regra usual: 30 minutos, com previsão de indenização conforme ACT (quando aplicável). <span class='cite-badge' data-pdf='acordo' data-page='16'>ACT Pág. 16</span>",
    tags: ["12x36", "escala", "intervalo"],
  },
  {
    q: "Qual o intervalo em escala 24x72?",
    a: "Regra usual: 1 hora, com previsão de indenização conforme ACT (quando aplicável). <span class='cite-badge' data-pdf='acordo' data-page='16'>ACT Pág. 16</span>",
    tags: ["24x72", "escala", "intervalo"],
  },
  {
    q: "Em substituição de escala, existe ajuda de custo?",
    a: "Sim, há previsão de ajuda de custo em situações específicas, conforme ACT. <span class='cite-badge' data-pdf='acordo' data-page='3'>ACT Pág. 3</span>",
    tags: ["ajuda de custo", "substituição", "escala"],
  },

  // Ponto / ajustes
  {
    q: "Esqueci de bater o ponto. O que fazer?",
    a: "Abra o ajuste/ocorrência conforme o manual. Há limite mensal para uso do motivo “esqueci”. <span class='cite-badge' data-pdf='manual' data-page='7'>Manual Pág. 7</span>",
    tags: ["ponto", "esquecimento", "ajuste"],
  },
  {
    q: "Outra pessoa pode bater o ponto por mim?",
    a: "Não. Registro por terceiros é vedado e pode configurar falta grave (risco disciplinar). <span class='cite-badge' data-pdf='norma' data-page='4'>Norma (Vedações)</span>",
    tags: ["ponto", "terceiros", "vedação"],
  },
  {
    q: "Preciso conferir minha folha de ponto?",
    a: "Sim. O empregado deve conferir/assinar a folha no período indicado pelo manual. <span class='cite-badge' data-pdf='manual' data-page='4'>Manual Pág. 4</span>",
    tags: ["folha", "conferir", "assinatura"],
  },
  {
    q: "Qual é o papel do gestor no fechamento do ponto?",
    a: "Validar a folha e tratar ocorrências no prazo definido no manual. <span class='cite-badge' data-pdf='manual' data-page='5'>Manual Pág. 5</span>",
    tags: ["gestor", "validação", "prazo"],
  },

  // Troca de serviço / permutas
  {
    q: "Quantas trocas de serviço posso fazer?",
    a: "Há limite de trocas e exigência de antecedência conforme normas/ACT. <span class='cite-badge' data-pdf='norma' data-page='14'>Norma Pág. 14</span>",
    tags: ["troca", "permuta"],
  },
  {
    q: "Troca de plantão precisa de autorização?",
    a: "Sim. Deve seguir o fluxo e autorização definidos (evite acertos informais). <span class='cite-badge' data-pdf='acordo' data-page='30'>ACT Pág. 30</span>",
    tags: ["permuta", "autorização", "plantão"],
  },

  // Responsabilidades e “desconhecimento”
  {
    q: "Os normativos são acessíveis a todos os empregados?",
    a: "Sim. Estão disponíveis na intranet/SEI/portal e também podem ser solicitados ao gestor ou ao Núcleo de Pessoal/RH. Por isso, não é cabível alegar desconhecimento das regras.",
    tags: ["normativo", "intranet", "desconhecimento"],
  },
  {
    q: "Este site substitui os documentos oficiais?",
    a: "Não. Este guia é apenas um apoio de consulta. Em caso de divergência, prevalece sempre o documento oficial vigente.",
    tags: ["aviso", "documento oficial", "guia"],
  },

  // Situações comuns (extras)
  { q: "Posso emendar o intervalo e sair mais cedo?", a: "Somente quando permitido pelo normativo e com anuência do gestor (e registro correto). Não faça ajustes informais.", tags: ["intervalo", "saída", "flex"] },
  { q: "O intervalo conta como hora trabalhada?", a: "Em regra não. Em escalas, pode haver regramento específico de indenização conforme ACT. <span class='cite-badge' data-pdf='acordo' data-page='16'>ACT Pág. 16</span>", tags: ["intervalo", "indenização"] },
  { q: "Como agir quando a operação impede intervalo no horário planejado?", a: "Registrar corretamente, tratar ocorrência com o gestor e seguir orientação do RH quando necessário.", tags: ["operação", "ocorrência", "gestor"] },
  { q: "Existe risco trabalhista se o intervalo não for cumprido?", a: "Sim. O descumprimento de intervalo pode gerar passivo e responsabilização. Por isso, o controle é rigoroso.", tags: ["risco", "passivo", "intervalo"] },

  // Adicionais (mais itens)
  { q: "Posso fazer hora extra sem autorização?", a: "Não é recomendado. Siga o fluxo de autorização e registro de horas, evitando irregularidades.", tags: ["hora extra", "autorização"] },
  { q: "Como registrar convocação em folga/feriado?", a: "Registrar no sistema e aplicar as regras do ACT para adicional quando cabível. <span class='cite-badge' data-pdf='acordo' data-page='15'>ACT Pág. 15</span>", tags: ["feriado", "folga", "adicional"] },
  { q: "O que é interjornada e por que importa?", a: "É o descanso entre duas jornadas. Ajuda a evitar fadiga e reduz risco jurídico.", tags: ["interjornada", "conceito"] },
  { q: "O que é intrajornada e por que importa?", a: "É o intervalo dentro da jornada (ex.: almoço). Protege saúde e reduz riscos.", tags: ["intrajornada", "conceito"] },
  { q: "Se eu esqueci de bater o ponto, posso pedir para o gestor 'arrumar'?", a: "O gestor deve orientar e validar dentro do fluxo oficial, evitando qualquer adulteração. <span class='cite-badge' data-pdf='manual' data-page='5'>Manual Pág. 5</span>", tags: ["ajuste", "gestor"] },
  { q: "O que devo fazer se o sistema estiver fora do ar?", a: "Registrar evidências (ex.: print/ocorrência), comunicar gestor e regularizar assim que o sistema retornar.", tags: ["sistema", "indisponibilidade"] },
  { q: "Como funciona a tolerância de marcação?", a: "A tolerância (quando prevista) não autoriza descumprir intervalo; ela é regra operacional de registro. Consulte o manual/norma.", tags: ["tolerância", "registro"] },
  { q: "Intervalo pode ser fracionado?", a: "Somente quando houver previsão e orientação formal. Caso contrário, mantenha o padrão.", tags: ["fracionar", "intervalo"] },
  { q: "Quem fiscaliza o cumprimento de jornada e intervalos?", a: "Empregado (autocontrole), gestor (fiscalização) e RH (normatização/auditoria).", tags: ["fiscalização", "papéis"] },
  { q: "O que é 'banco paralelo'?", a: "Qualquer acerto de horas sem registro oficial (planilha, caderno, acordo verbal). É vedado. <span class='cite-badge' data-pdf='norma' data-page='16'>Norma (Vedações)</span>", tags: ["banco paralelo", "vedação"] },
  { q: "Posso alterar marcações antigas?", a: "Somente via fluxo de ocorrência/ajuste previsto, com justificativa e validação dentro do prazo.", tags: ["alterar", "marcação", "prazo"] },
  { q: "Qual o prazo para o gestor tratar ocorrências?", a: "O manual estabelece prazo para análise/tratativa. <span class='cite-badge' data-pdf='manual' data-page='5'>Manual Pág. 5</span>", tags: ["prazo", "gestor", "ocorrência"] },
  { q: "Onde encontro o ACT e a cartilha?", a: "Na intranet/portal do colaborador e também via RH/Sindicato (conforme divulgado).", tags: ["act", "cartilha", "onde"] },
  { q: "Como buscar um tema específico no PDF?", a: "Abra um documento e use o campo 'Buscar no índice' ou a busca do próprio visualizador do PDF.", tags: ["buscar", "pdf"] },
  { q: "Este guia é para quem?",
    a: "Para gestores, empregados e Núcleo de Pessoal/RH como apoio de consulta rápida. Ele não substitui normativos.",
    tags: ["público", "guia"]
  },
];

// =============================================================
// 3. LÓGICA DO SISTEMA
// =============================================================
let currentDoc = null;
let currentPage = 1;

document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  setupTabs();
  renderFAQ(faqItems);
  setupSearch();
  setupQuickPills();
  setupPdfModalUX();

  // Cite-badges clicáveis
  document.querySelectorAll(".cite-badge").forEach((badge) => {
    badge.addEventListener("click", (e) => {
      e.stopPropagation();
      if (badge.dataset.pdf && badge.dataset.page) {
        openPdfViewer(badge.dataset.pdf, Number.parseInt(badge.dataset.page, 10));
      }
    });
  });
});

function setupTheme() {
  const btnTheme = document.getElementById("btnTheme");
  
  // 1. Tenta pegar do armazenamento. Se não tiver, assume "light" como padrão
  const storedTheme = localStorage.getItem("theme") || "light";
  
  // 2. Aplica o tema
  document.documentElement.dataset.theme = storedTheme;

  // 3. Configura o botão de troca
  if (btnTheme) {
    btnTheme.addEventListener("click", () => {
      // Verifica qual é o atual para inverter
      const current = document.documentElement.dataset.theme === "light" ? "dark" : "light";
      
      document.documentElement.dataset.theme = current;
      localStorage.setItem("theme", current);
    });
  }

  // print (mantém como estava)
  const btnPrint = document.getElementById("btnPrint");
  if (btnPrint) btnPrint.addEventListener("click", () => window.print());
}

function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tabpanel");
  if (!tabs.length || !panels.length) return;

  function activate(tabId) {
    tabs.forEach((t) => {
      const isActive = t.dataset.tab === tabId;
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    panels.forEach((p) => p.classList.toggle("active", p.dataset.panel === tabId));
  }

  tabs.forEach((t) => t.addEventListener("click", () => activate(t.dataset.tab)));
}

function renderFAQ(items) {
  const container = document.getElementById("faqList");
  if (!container) return;

  container.innerHTML = items
    .map(
      (it) => `
      <div class="acc" data-open="false">
        <button class="acc__btn" type="button" onclick="this.parentElement.dataset.open = this.parentElement.dataset.open === 'true' ? 'false' : 'true'">
          ${it.q} <span>▾</span>
        </button>
        <div class="acc__panel">${it.a}</div>
      </div>
    `,
    )
    .join("");
}

function setupSearch() {
  const input = document.getElementById("faqSearch");
  if (!input) return;

  input.addEventListener("input", (e) => {
    const term = String(e.target.value || "").toLowerCase().trim();
    if (!term) return renderFAQ(faqItems);

    const filtered = faqItems.filter(
      (it) =>
        it.q.toLowerCase().includes(term) ||
        it.a.toLowerCase().includes(term) ||
        (it.tags || []).some((t) => t.includes(term)),
    );
    renderFAQ(filtered);
  });
}

// =============================================================
// 4. PDF VIEWER (robusto + tela cheia)
// =============================================================
window.openPdfViewer = function (docId, page = null) {
  const modal = document.getElementById("pdfModal");
  const frame = document.getElementById("realPdfFrame");
  const data = pdfData[docId];

  if (!data) return alert("Erro: Documento não configurado no app.js");

  currentDoc = docId;
  currentPage = page ? Number(page) : 1;

  document.getElementById("pdfDocTitle").innerText = data.title;
  document.getElementById("pdfPageNum").innerText = String(currentPage);

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");

  // Encode para evitar erros com espaços/acentos no nome do arquivo
  const filePath = `assets/${encodeURIComponent(data.filename)}`;

  frame.src = ""; // limpa anterior
  setTimeout(() => {
    frame.src = filePath + `#page=${currentPage}`;
  }, 30);

  renderSidebar(docId);
};

window.closePdfViewer = function () {
  const modal = document.getElementById("pdfModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");

  const frame = document.getElementById("realPdfFrame");
  frame.src = "";

  const input = document.getElementById("pdfInternalSearch");
  if (input) input.value = "";

  // sai do fullscreen se estiver ativo
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
};

function renderSidebar(docId) {
  const list = document.getElementById("pdfSearchResults");
  const pages = pdfData[docId].pages;
  list.innerHTML = "";

  if (!pages) {
    list.innerHTML = `<div class="empty-state">Índice indisponível.</div>`;
    return;
  }

  const sortedPages = Object.keys(pages).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

  list.innerHTML = sortedPages
    .map(
      (pageNum) => `
        <div class="sidebar-item" role="button" tabindex="0" onclick="forcePageNav(${pageNum})">
          <strong>Página ${pageNum}</strong>
          <div style="font-size:0.8em; line-height:1.35; margin-top:4px; opacity:0.85; color: var(--text);">
            ${pages[pageNum]}
          </div>
        </div>
      `,
    )
    .join("");
}

window.forcePageNav = function (pageNum) {
  const frame = document.getElementById("realPdfFrame");
  const base = frame.src.split("#")[0];
  currentPage = Number(pageNum) || 1;
  frame.src = `${base}#page=${currentPage}`;
  document.getElementById("pdfPageNum").innerText = String(currentPage);
};

window.changePage = function (delta) {
  if (!currentDoc) return;
  const next = Math.max(1, (Number(currentPage) || 1) + Number(delta || 0));
  forcePageNav(next);
};

function setupPdfModalUX() {
  const modal = document.getElementById("pdfModal");
  const content = document.getElementById("pdfModalContent");
  const input = document.getElementById("pdfInternalSearch");

  // fechar ao clicar fora do conteúdo
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closePdfViewer();
  });

  // ESC fecha
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) closePdfViewer();
  });

  // Busca no índice
  input.addEventListener("input", (e) => {
    const term = String(e.target.value || "").toLowerCase().trim();
    const list = document.getElementById("pdfSearchResults");
    const pages = pdfData[currentDoc]?.pages || {};

    if (!term) return renderSidebar(currentDoc);

    const results = Object.entries(pages).filter(([_, t]) => String(t).toLowerCase().includes(term));

    if (results.length === 0) {
      list.innerHTML = `<div class="empty-state">Sem resultados no índice.</div>`;
      return;
    }

    list.innerHTML = results
      .map(([pageNum, text]) => {
        const regex = new RegExp(`(${escapeRegExp(term)})`, "gi");
        const snippet = String(text).replace(
          regex,
          "<mark style=\"background:var(--brand); color:black; padding:0 2px; border-radius:3px;\">$1</mark>",
        );
        return `
          <div class="sidebar-item" role="button" tabindex="0" onclick="forcePageNav(${pageNum})">
            <strong>Página ${pageNum}</strong>
            <div style="font-size:0.8em; line-height:1.35; margin-top:4px; opacity:0.9;">${snippet}</div>
          </div>
        `;
      })
      .join("");
  });

  // permite Ctrl+F focar campo do índice quando modal aberto
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
      e.preventDefault();
      input.focus();
    }
  });

  // evitar scroll do body quando modal aberto
  const observer = new MutationObserver(() => {
    document.body.style.overflow = modal.classList.contains("active") ? "hidden" : "";
  });
  observer.observe(modal, { attributes: true, attributeFilter: ["class"] });
}

window.toggleViewerFullscreen = function () {
  const el = document.getElementById("pdfModalContent");
  if (!document.fullscreenElement) {
    el.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.().catch(() => {});
  }
};

// =============================================================
// 5. Atalhos
// =============================================================
function setupQuickPills() {
  window.quickSearch = function (term) {
    openPdfViewer("norma");
    const input = document.getElementById("pdfInternalSearch");
    setTimeout(() => {
      input.value = term;
      input.dispatchEvent(new Event("input"));
    }, 300);
  };
}

function escapeRegExp(str) {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}


// ... código anterior ...

/// =============================================================
// 6. SISTEMA DE LOGIN (HASH SHA-256)
// =============================================================
// Hash gerado para o PIN "2026" (conforme sua imagem)
// const EXPECTED_HASH = "deae5288bf132419396f858100443ecef135500a4bf6328d76162c38aacb68de"; 
const EXPECTED_HASH = "158a323a7ba44870f23d96f1516dd70aa48e9a72db4ebb026b0a89e212a208ab"; 
const SESSION_KEY = "auth_gestao_intervalos";

document.addEventListener("DOMContentLoaded", () => {
  // Verifica se já está logado
  if (sessionStorage.getItem(SESSION_KEY) === "true") {
    unlockApp();
  } else {
    // Foca no input se não estiver logado
    const pinInput = document.getElementById("pinInput");
    if(pinInput) pinInput.focus();
  }

  // Permite apertar ENTER para entrar
  const input = document.getElementById("pinInput");
  if (input) {
    input.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        validatePin();
      }
    });
  }
});

// Função auxiliar para gerar o Hash SHA-256
async function sha256(message) {
  // Converte a string para um buffer de dados
  const msgBuffer = new TextEncoder().encode(message);
  // Gera o hash usando a API nativa do navegador
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  // Converte o buffer de volta para array de bytes
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  // Converte bytes para string Hexadecimal
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Transformamos a função em ASYNC porque a criptografia leva alguns milissegundos
window.validatePin = async function() {
  const input = document.getElementById("pinInput");
  const errorMsg = document.getElementById("loginError");
  const enteredPin = input.value;

  // Gera o hash do que o usuário digitou
  const enteredHash = await sha256(enteredPin);

  if (enteredHash === EXPECTED_HASH) {
    // Hash bateu! (Senha correta)
    sessionStorage.setItem(SESSION_KEY, "true");
    unlockApp();
  } else {
    // Senha incorreta
    errorMsg.classList.remove("hidden");
    input.value = "";
    input.focus();
    
    // Efeito visual de tremor
    const card = document.querySelector(".login-card");
    if(card) {
        card.style.transform = "translateX(10px)";
        setTimeout(() => card.style.transform = "translateX(-10px)", 100);
        setTimeout(() => card.style.transform = "none", 200);
    }
  }
};

function unlockApp() {
  const screen = document.getElementById("loginScreen");
  if (screen) {
    screen.style.opacity = "0";
    setTimeout(() => {
      screen.classList.add("hidden");
    }, 300);
  }
}

// ... código anterior dentro do DOMContentLoaded ...

  // Lógica do Botão de Sair (Logout)
  const btnLogout = document.getElementById("btnLogout");
  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      // 1. Remove a permissão da sessão
      sessionStorage.removeItem(SESSION_KEY);
      
      // 2. Traz a tela de bloqueio de volta
      const screen = document.getElementById("loginScreen");
      const input = document.getElementById("pinInput");
      
      if (screen) {
        screen.classList.remove("hidden");
        // Pequeno delay para permitir que o navegador renderize o display:flex antes da opacidade
        setTimeout(() => {
            screen.style.opacity = "1";
        }, 10);
      }
      
      // 3. Limpa o campo de senha
      if (input) {
        input.value = "";
        input.focus();
      }

      // Opcional: Se quiser fechar modais ou limpar a tela ao sair, descomente a linha abaixo:
      // window.location.reload(); 
    });
  }