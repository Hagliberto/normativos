/* Modal Reutilizável — Explicação, FAQ e futuros conteúdos */
(function () {
  "use strict";

  function qs(sel, root = document) { return root.querySelector(sel); }

  const state = {
    src: null,
  };

  function ensureIframeLoaded(src) {
    const iframe = qs("#appModalFrame");
    if (!iframe) return;
    if (!iframe.src || iframe.src === "about:blank") iframe.src = src;
    else iframe.src = src;
  }

  function openModal(opts) {
    const modal = qs("#appModal");
    if (!modal) return;

    const titleEl = qs("#appModalTitle");
    const chipEl = qs("#appModalChip");

    const title = opts?.title || "📌 Conteúdo";
    const chip = opts?.chip || "";
    const src = opts?.src || "about:blank";

    if (titleEl) titleEl.textContent = title;
    if (chipEl) {
      chipEl.textContent = chip;
      chipEl.style.display = chip ? "" : "none";
    }

    state.src = src;
    ensureIframeLoaded(src);

    modal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("modal-open");

    const closeBtn = qs("[data-modal-close]", modal);
    closeBtn && closeBtn.focus();
  }

  function closeModal() {
    const modal = qs("#appModal");
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("modal-open");
  }

  function setupModal() {
    const modal = qs("#appModal");
    const panel = qs("#appModalPanel");
    if (!modal || !panel) return;

    // Close
    const btnClose = qs("[data-modal-close]", modal);
    btnClose && btnClose.addEventListener("click", closeModal);

    // Open in page (new tab)
    const btnOpenPage = qs("[data-modal-open-page]", modal);
    btnOpenPage && btnOpenPage.addEventListener("click", () => {
      const src = state.src || qs("#appModalFrame")?.src || "about:blank";
      if (!src || src === "about:blank") return;
      window.open(src, "_blank", "noopener,noreferrer");
    });

    // click outside to close
    modal.addEventListener("click", (e) => {
      if (panel && !panel.contains(e.target)) closeModal();
    });

    // ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeModal();
    });

    // Delegated open triggers
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-modal-open]");
      if (!btn) return;

      const src = btn.getAttribute("data-src");
      const title = btn.getAttribute("data-title") || "📌 Conteúdo";
      const chip = btn.getAttribute("data-chip") || "";

      if (!src) return;
      openModal({ src, title, chip });
    });
  }

  // Boot
  document.addEventListener("DOMContentLoaded", setupModal);

  // Expose (optional)
  window.AppModal = { open: openModal, close: closeModal };
})();
