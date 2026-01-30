// Modal Component - Reutilizável
export function setupModal({openBtn, modalId, iframeSrc}) {
  const btn = document.querySelector(openBtn);
  const modal = document.getElementById(modalId);
  if(!btn || !modal) return;

  const iframe = modal.querySelector("iframe");
  const closeBtns = modal.querySelectorAll("[data-modal-close]");
  const newTabBtn = modal.querySelector("[data-modal-newtab]");

  btn.addEventListener("click", () => {
    modal.classList.add("open");
    if (iframe && iframeSrc) iframe.src = iframeSrc;
  });

  closeBtns.forEach(b => b.addEventListener("click", () => {
    modal.classList.remove("open");
    if (iframe) iframe.src = "";
  }));

  if(newTabBtn && iframeSrc){
    newTabBtn.addEventListener("click", () => window.open(iframeSrc, "_blank"));
  }
}
