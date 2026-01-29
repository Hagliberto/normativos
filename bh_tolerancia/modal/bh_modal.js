/* BH Tolerância — Modal (não depende do app.js) */
(function () {
  "use strict";

  function qs(sel, root=document){ return root.querySelector(sel); }

  function openModal() {
    const modal = qs("#bhInfoModal");
    const iframe = qs("#bhInfoFrame");
    if (!modal || !iframe) return;

    // Carrega o conteúdo (HTML separado)
    const src = iframe.getAttribute("data-src") || "bh_tolerancia/index.html";
    if (!iframe.src || iframe.src === "about:blank") iframe.src = src;

    modal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("modal-open");
    // foco no botão fechar (melhor UX)
    const closeBtn = qs("[data-bh-close]", modal);
    closeBtn && closeBtn.focus();
  }

  function closeModal() {
    const modal = qs("#bhInfoModal");
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("modal-open");
  }

  function openInNewTab() {
    const iframe = qs("#bhInfoFrame");
    if (!iframe) return;
    const src = iframe.getAttribute("data-src") || "bh_tolerancia/index.html";
    window.open(src, "_blank", "noopener");
  }

  function setup() {
    const openBtn = qs("[data-bh-open]");
    const modal = qs("#bhInfoModal");
    const panel = qs("#bhInfoPanel");
    const closeBtn = qs("[data-bh-close]");
    const openPageBtn = qs("[data-bh-open-page]");

    if (!openBtn || !modal || !panel) return;

    openBtn.addEventListener("click", openModal);
    closeBtn && closeBtn.addEventListener("click", closeModal);
    openPageBtn && openPageBtn.addEventListener("click", openInNewTab);

    // fechar ao clicar fora
    modal.addEventListener("click", (e) => {
      if (!panel.contains(e.target)) closeModal();
    });

    // ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
        closeModal();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", setup);
})();
