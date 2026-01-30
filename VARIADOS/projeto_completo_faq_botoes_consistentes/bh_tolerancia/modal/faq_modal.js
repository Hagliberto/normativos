/* FAQ Interativo — Modal (isolado, não interfere no restante do app) */
(function () {
  "use strict";

  function qs(sel, root=document){ return root.querySelector(sel); }
  function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

  function openFaqModal() {
    const modal = qs("#faqModal");
    const iframe = qs("#faqFrame");
    if (!modal || !iframe) return;

    const src = iframe.getAttribute("data-src") || "bh_tolerancia/faq.html";
    if (!iframe.src || iframe.src === "about:blank") iframe.src = src;

    modal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("modal-open");

    const closeBtn = qs("[data-faq-close]", modal);
    closeBtn && closeBtn.focus();
  }

  function closeFaqModal() {
    const modal = qs("#faqModal");
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("modal-open");
  }

  function openFaqNewTab() {
    const iframe = qs("#faqFrame");
    const src = (iframe && (iframe.getAttribute("data-src") || iframe.src)) || "bh_tolerancia/faq.html";
    window.open(src, "_blank", "noopener,noreferrer");
  }

  function init() {
    // Botões que abrem o FAQ (na tela principal)
    qsa("[data-faq-open]").forEach((btn) => {
      btn.addEventListener("click", openFaqModal);
    });

    const modal = qs("#faqModal");
    const panel = qs("#faqPanel");
    if (!modal) return;

    // Fechar
    const closeBtn = qs("[data-faq-close]", modal);
    closeBtn && closeBtn.addEventListener("click", closeFaqModal);

    // Abrir em nova aba (opcional)
    const newTabBtn = qs("[data-faq-newtab]", modal);
    newTabBtn && newTabBtn.addEventListener("click", openFaqNewTab);

    // Clique fora fecha
    modal.addEventListener("click", (e) => {
      if (panel && !panel.contains(e.target)) closeFaqModal();
    });

    // ESC fecha
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeFaqModal();
    });
  }

  // Aguarda DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
