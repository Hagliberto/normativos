/* FAQ Modal — simples e independente */
(function(){
  "use strict";
  function qs(sel, root=document){ return root.querySelector(sel); }
  function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

  function ensureIframeLoaded(){
    const iframe = qs("#faqFrame");
    if(!iframe) return;
    const src = iframe.getAttribute("data-src") || "faq.html";
    if(!iframe.src || iframe.src === "about:blank") iframe.src = src;
  }

  function openModal(){
    const modal = qs("#faqModal");
    if(!modal) return;
    ensureIframeLoaded();
    modal.setAttribute("aria-hidden","false");
    document.documentElement.classList.add("modal-open");
    const closeBtn = qs("[data-faq-close]", modal);
    closeBtn && closeBtn.focus();
  }

  function closeModal(){
    const modal = qs("#faqModal");
    if(!modal) return;
    modal.setAttribute("aria-hidden","true");
    document.documentElement.classList.remove("modal-open");
  }

  function openInNewTab(){
    const iframe = qs("#faqFrame");
    if(!iframe) return;
    const src = iframe.getAttribute("data-src") || "faq.html";
    window.open(src, "_blank", "noopener");
  }

  function setup(){
    const modal = qs("#faqModal");
    const panel = qs("#faqPanel");
    if(!modal || !panel) return;

    // suporta múltiplos botões
    qsa("[data-faq-open]").forEach(btn => btn.addEventListener("click", openModal));

    const closeBtn = qs("[data-faq-close]", modal);
    const openPageBtn = qs("[data-faq-open-page]", modal);

    closeBtn && closeBtn.addEventListener("click", closeModal);
    openPageBtn && openPageBtn.addEventListener("click", openInNewTab);

    // botão que abre o modal E abre em nova aba
    qsa("[data-faq-open-page-direct]").forEach(btn => btn.addEventListener("click", ()=>{
      openModal();
      openInNewTab();
    }));

    modal.addEventListener("click", (e)=>{ if(!panel.contains(e.target)) closeModal(); });

    document.addEventListener("keydown", (e)=>{
      if(e.key === "Escape" && modal.getAttribute("aria-hidden")==="false") closeModal();
    });
  }

  document.addEventListener("DOMContentLoaded", setup);
})();