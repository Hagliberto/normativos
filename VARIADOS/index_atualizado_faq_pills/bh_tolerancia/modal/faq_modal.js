/* FAQ Modal — simples e independente */
(function(){
  "use strict";
  function qs(sel, root=document){ return root.querySelector(sel); }

  function openModal(){
    const modal = qs("#faqModal");
    const iframe = qs("#faqFrame");
    if(!modal || !iframe) return;

    const src = iframe.getAttribute("data-src") || "faq.html";
    if(!iframe.src || iframe.src === "about:blank") iframe.src = src;

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
    const openBtn = qs("[data-faq-open]");
    const modal = qs("#faqModal");
    const panel = qs("#faqPanel");
    const closeBtn = qs("[data-faq-close]");
    const openPageBtn = qs("[data-faq-open-page]");

    if(!openBtn || !modal || !panel) return;

    openBtn.addEventListener("click", openModal);
    closeBtn && closeBtn.addEventListener("click", closeModal);
    openPageBtn && openPageBtn.addEventListener("click", openInNewTab);

    modal.addEventListener("click", (e)=>{ if(!panel.contains(e.target)) closeModal(); });

    document.addEventListener("keydown", (e)=>{
      if(e.key === "Escape" && modal.getAttribute("aria-hidden")==="false") closeModal();
    });
  }

  document.addEventListener("DOMContentLoaded", setup);
})();