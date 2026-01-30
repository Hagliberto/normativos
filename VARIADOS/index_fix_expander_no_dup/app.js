// 1. IMPORTAÇÃO DOS DADOS
import { faqItems } from "./faq-data.js";

// =============================================================
// CONFIGURAÇÃO DOS DOCUMENTOS PDF
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
// VARIÁVEIS DE ESTADO E CONSTANTES
// =============================================================
let currentDoc = null;
let currentPage = 1;

// Hash SHA-256 para a senha "2026"
const EXPECTED_HASH =
  "ebd72b510911af3e254a030cd891cb804e1902189eee7a0f6199472eb5e4dba2";
const SESSION_KEY = "auth_gestao_intervalos";

// =============================================================
// INICIALIZAÇÃO (DOMContentLoaded)
// =============================================================
document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  setupTabs();
  renderFAQ(faqItems); // Renderiza o FAQ importado
  setupSearch();
  setupQuickPills();
  setupPdfModalUX();
  setupOpenFaqButtons();

  // 1. CORREÇÃO GLOBAL: Delegação de Eventos no BODY inteiro
  // Isso garante que badges nas Tabelas, no FAQ ou em qualquer lugar funcionem
  document.body.addEventListener("click", (e) => {
    // Procura se o clique foi num badge ou dentro dele
    const badge = e.target.closest(".cite-badge");

    if (badge) {
      e.preventDefault();
      e.stopPropagation();
      const docId = badge.dataset.pdf;
      const page = badge.dataset.page;

      // Chama o visualizador se tiver os dados
      if (docId && page) {
        openPdfViewer(docId, page);
      }
    }
  });

  // 2. Lógica de Login na inicialização
  const isLogged =
    sessionStorage.getItem(SESSION_KEY) === "true" ||
    localStorage.getItem(SESSION_KEY) === "true";

  if (isLogged) {
    // garante sessão nesta aba
    sessionStorage.setItem(SESSION_KEY, "true");
    unlockApp();
  } else {
    const pinInput = document.getElementById("pinInput");
    if (pinInput) pinInput.focus();
  }

  // 3. Listener para tecla Enter no Login
  const pinInput = document.getElementById("pinInput");
  if (pinInput) {
    pinInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        validatePin();
      }
    });
  }

  // 4. Configuração do Botão de Sair (Logout)
  const btnLogout = document.getElementById("btnLogout");
  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      sessionStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(SESSION_KEY);

      const screen = document.getElementById("loginScreen");
      const input = document.getElementById("pinInput");

      if (screen) {
        screen.classList.remove("hidden");
        setTimeout(() => {
          screen.style.opacity = "1";
        }, 10);
      }
      if (input) {
        input.value = "";
        input.focus();
      }
    });
  }
});

// =============================================================
// FUNÇÕES DE UI E LÓGICA
// =============================================================

function setupTheme() {
  const btnTheme = document.getElementById("btnTheme");
  const storedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.dataset.theme = storedTheme;

  if (btnTheme) {
    btnTheme.addEventListener("click", () => {
      const current =
        document.documentElement.dataset.theme === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = current;
      localStorage.setItem("theme", current);
    });
  }
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
    panels.forEach((p) =>
      p.classList.toggle("active", p.dataset.panel === tabId),
    );
  }
  tabs.forEach((t) =>
    t.addEventListener("click", () => activate(t.dataset.tab)),
  );
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
    const term = String(e.target.value || "")
      .toLowerCase()
      .trim();
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

// =============================================================
// PDF VIEWER
// =============================================================

// Define globalmente para o HTML poder chamar onclick="openPdfViewer..."
window.openPdfViewer = function (docId, page = null) {
  const modal = document.getElementById("pdfModal");
  const frame = document.getElementById("realPdfFrame");
  const data = pdfData[docId];

  if (!data) return alert("Erro: Documento não configurado.");

  currentDoc = docId;
  currentPage = page ? Number(page) : 1;

  document.getElementById("pdfDocTitle").innerText = data.title;
  document.getElementById("pdfPageNum").innerText = String(currentPage);

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");

  const filePath = `assets/${encodeURIComponent(data.filename)}`;
  frame.src = "";
  setTimeout(() => {
    frame.src = filePath + `#page=${currentPage}`;
  }, 30);
  renderSidebar(docId);
};

window.closePdfViewer = function () {
  const modal = document.getElementById("pdfModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.getElementById("realPdfFrame").src = "";
  const input = document.getElementById("pdfInternalSearch");
  if (input) input.value = "";
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
};

function renderSidebar(docId) {
  const list = document.getElementById("pdfSearchResults");
  const pages = pdfData[docId].pages;
  list.innerHTML = "";
  if (!pages) {
    list.innerHTML = `<div class="empty-state">Índice indisponível.</div>`;
    return;
  }
  const sortedPages = Object.keys(pages).sort(
    (a, b) => Number.parseInt(a, 10) - Number.parseInt(b, 10),
  );
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

globalThis.forcePageNav = function (pageNum) {
  const frame = document.getElementById("realPdfFrame");
  const base = frame.src.split("#")[0];
  currentPage = Number(pageNum) || 1;
  frame.src = `${base}#page=${currentPage}`;
  document.getElementById("pdfPageNum").innerText = String(currentPage);
};

globalThis.changePage = function (delta) {
  if (!currentDoc) return;
  const next = Math.max(1, (Number(currentPage) || 1) + Number(delta || 0));
  forcePageNav(next);
};

globalThis.toggleViewerFullscreen = function () {
  const el = document.getElementById("pdfModalContent");
  if (document.fullscreenElement) {
    document.exitFullscreen?.().catch(() => {});
  } else {
    el.requestFullscreen?.().catch(() => {});
  }
};

function setupPdfModalUX() {
  const modal = document.getElementById("pdfModal");
  const input = document.getElementById("pdfInternalSearch");

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closePdfViewer();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active"))
      closePdfViewer();
  });

  input.addEventListener("input", (e) => {
    const term = String(e.target.value || "")
      .toLowerCase()
      .trim();
    const list = document.getElementById("pdfSearchResults");
    const pages = pdfData[currentDoc]?.pages || {};
    if (!term) return renderSidebar(currentDoc);

    const results = Object.entries(pages).filter(([_, t]) =>
      String(t).toLowerCase().includes(term),
    );
    if (results.length === 0) {
      list.innerHTML = `<div class="empty-state">Sem resultados.</div>`;
      return;
    }
    list.innerHTML = results
      .map(([pageNum, text]) => {
        const snippet = String(text).replaceAll(
          new RegExp(`(${escapeRegExp(term)})`, "gi"),
          '<mark style="background:var(--brand); color:black;">$1</mark>',
        );
        return `
          <div class="sidebar-item" role="button" tabindex="0" onclick="forcePageNav(${pageNum})">
            <strong>Página ${pageNum}</strong>
            <div style="font-size:0.8em; line-height:1.35; margin-top:4px; opacity:0.9;">${snippet}</div>
          </div>`;
      })
      .join("");
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
      e.preventDefault();
      input.focus();
    }
  });
}

function escapeRegExp(str) {
  return String(str).replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// =============================================================
// SEGURANÇA (LOGIN/HASH)
// =============================================================

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// EXPOSIÇÃO GLOBAL DA FUNÇÃO DE LOGIN
globalThis.validatePin = async function () {
  const input = document.getElementById("pinInput");
  const errorMsg = document.getElementById("loginError");
  const enteredPin = input.value;

  try {
    const enteredHash = await sha256(enteredPin);
    // Compara ignorando maiúsculas/minúsculas
    if (enteredHash.toLowerCase() === EXPECTED_HASH.toLowerCase()) {
      sessionStorage.setItem(SESSION_KEY, "true");
      localStorage.setItem(SESSION_KEY, "true");

      const params = new URLSearchParams(globalThis.location.search);
      const redirect = params.get("redirect");

      if (redirect) {
        globalThis.location.href = redirect;
      } else {
        unlockApp();
      }
    } else {
      throw new Error("Senha incorreta");
    }
  } catch (e) {
    console.error(e);
    errorMsg.classList.remove("hidden");
    input.value = "";
    input.focus();
    const card = document.querySelector(".login-card");
    if (card) {
      card.style.transform = "translateX(10px)";
      setTimeout(() => (card.style.transform = "translateX(-10px)"), 100);
      setTimeout(() => (card.style.transform = "none"), 200);
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


// =============================================================
// ABRIR FAQ A PARTIR DE CTAs (ex.: Banco de Horas)
// =============================================================
function setupOpenFaqButtons() {
  const btns = document.querySelectorAll("[data-open-faq]");
  if (!btns.length) return;

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const faqDetails = document.getElementById("faq");
      if (faqDetails && faqDetails.tagName.toLowerCase() === "details") {
        faqDetails.open = true;
      }
      // Scroll suave para o FAQ
      (faqDetails || document.getElementById("faqList") || document.body).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Foca a busca do FAQ (se existir)
      const search = document.getElementById("faqSearch");
      if (search) {
        setTimeout(() => search.focus(), 350);
      }
    });
  });
}
