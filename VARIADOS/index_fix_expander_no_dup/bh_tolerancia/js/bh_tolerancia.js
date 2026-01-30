(function(){
  "use strict";
  const btn = document.getElementById("copyConclusion");
  const status = document.getElementById("copyStatus");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    const quote = document.querySelector("blockquote");
    const text = quote ? quote.innerText.trim() : "";
    try{
      await navigator.clipboard.writeText(text);
      if (status) status.textContent = "Copiado ✅";
      setTimeout(()=>{ if(status) status.textContent=""; }, 1600);
    }catch(e){
      if (status) status.textContent = "Não foi possível copiar (permissão do navegador).";
    }
  });
})();
