// auth/guard.js
(() => {
  const SESSION_KEY = "auth_gestao_intervalos";
  const isLogged =
    sessionStorage.getItem(SESSION_KEY) === "true" ||
    localStorage.getItem(SESSION_KEY) === "true";

  if (!isLogged) {
    const target = encodeURIComponent(
      globalThis.location.pathname +
        globalThis.location.search +
        globalThis.location.hash,
    );

    // volta para o login
    globalThis.location.replace(`/index.html?redirect=${target}`);
  }
})();
