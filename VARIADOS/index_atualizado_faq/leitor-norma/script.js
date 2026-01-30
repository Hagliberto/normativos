import { normaCompleta } from './dados/norma-texto.js';

const areaNorma = document.getElementById('areaNorma');
const inputBusca = document.getElementById('inputBusca');
const contador = document.getElementById('resultadoContador');
const btnTopo = document.getElementById('btnTopo');
const viewToggle = document.getElementById('viewToggle');

// Palavras-chave para destaque automático
const KEYWORDS = [
  "obrigatório", "vedado", "proibido", "prazo", 
  "48 horas", "24 horas", "desconto", "falta grave",
  "responsabilidade", "justificativa", "imediata", "excepcional"
];

let currentChapterContainer = null;

document.addEventListener('DOMContentLoaded', () => {
  renderizarNorma(normaCompleta);
  setupToggle();
  
  window.buscarTermo = (termo) => {
    inputBusca.value = termo;
    inputBusca.dispatchEvent(new Event('input'));
    inputBusca.focus();
  };
});

inputBusca.addEventListener('input', (e) => {
  const termo = e.target.value;
  filtrarRenderizar(termo);
});

window.addEventListener('scroll', () => {
  if(window.scrollY > 300) btnTopo.classList.add('visible');
  else btnTopo.classList.remove('visible');
});

// --- FUNÇÃO DE NORMALIZAÇÃO DE TEXTO (BUSCA ROBUSTA) ---
// Remove acentos e converte para minúsculas
function normalizarTexto(texto) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// --- LÓGICA DO TOGGLE ---
function setupToggle() {
  const savedView = localStorage.getItem('leitorViewMode');
  if (savedView === '2col') {
    viewToggle.checked = true;
    areaNorma.classList.add('layout-2-col');
    areaNorma.classList.remove('layout-1-col');
  } else {
    viewToggle.checked = false;
    areaNorma.classList.add('layout-1-col');
    areaNorma.classList.remove('layout-2-col');
  }

  viewToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      areaNorma.classList.add('layout-2-col');
      areaNorma.classList.remove('layout-1-col');
      localStorage.setItem('leitorViewMode', '2col');
    } else {
      areaNorma.classList.add('layout-1-col');
      areaNorma.classList.remove('layout-2-col');
      localStorage.setItem('leitorViewMode', '1col');
    }
  });
}

// --- RENDERIZAÇÃO ---

function renderizarNorma(dados, termoDestacado = '', estatisticas = null) {
  areaNorma.innerHTML = '';
  currentChapterContainer = null;

  if (dados.length === 0) {
    areaNorma.innerHTML = `
      <div class="panel panel--danger" style="text-align:center; padding: 40px;">
        <h3>Nenhum resultado encontrado</h3>
        <p>Tente buscar por termos mais simples ou sinônimos.</p>
      </div>`;
    contador.innerText = '';
    return;
  }

  dados.forEach(item => {
    const tituloUpper = item.titulo.toUpperCase();
    const isCapitulo = tituloUpper.includes("CAPÍTULO") || tituloUpper.includes("APROVAÇÃO");
    const isSecao = tituloUpper.includes("SEÇÃO");

    if (isCapitulo) {
      const details = document.createElement('details');
      details.className = 'capitulo-expander';
      if (termoDestacado) details.open = true;

      const summary = document.createElement('summary');
      summary.className = 'capitulo-summary';
      summary.innerHTML = `<h2>${destacarTexto(item.titulo, termoDestacado)}</h2>`;
      
      const content = document.createElement('div');
      content.className = 'capitulo-content';

      details.appendChild(summary);
      details.appendChild(content);
      areaNorma.appendChild(details);

      currentChapterContainer = content; 

      if (item.artigos && item.artigos.length > 0) {
        renderArtigos(item.artigos, content, termoDestacado);
      }

    } else if (isSecao) {
      const details = document.createElement('details');
      details.className = 'secao-expander';
      if (termoDestacado) details.open = true;

      const summary = document.createElement('summary');
      summary.className = 'secao-summary';
      summary.innerHTML = `<span class="secao-pill-title">${destacarTexto(item.titulo, termoDestacado)}</span>`;

      const content = document.createElement('div');
      content.className = 'secao-content';

      details.appendChild(summary);
      details.appendChild(content);

      if (currentChapterContainer) {
        currentChapterContainer.appendChild(details);
      } else {
        areaNorma.appendChild(details);
      }

      if (item.artigos && item.artigos.length > 0) {
        renderArtigos(item.artigos, content, termoDestacado);
      }
    } else {
      if (item.artigos && item.artigos.length > 0) {
        const container = currentChapterContainer || areaNorma;
        renderArtigos(item.artigos, container, termoDestacado);
      }
    }
  });

  atualizarContador(termoDestacado, estatisticas);
}

function renderArtigos(listaArtigos, container, termo) {
  listaArtigos.forEach(artigo => {
    const card = document.createElement('div');
    card.className = 'artigo-card';
    
    let htmlItens = '';
    if(artigo.itens && artigo.itens.length > 0) {
      htmlItens = `<div class="artigo-itens">
        ${artigo.itens.map(it => 
          `<div class="item-linha">${formatarItemJuridico(it, termo)}</div>`
        ).join('')}
      </div>`;
    }

    const numeroClass = artigo.numero.includes("Art") ? "artigo-badge" : "artigo-badge badge--meta";

    card.innerHTML = `
      <div class="artigo-header">
        <span class="${numeroClass}">${destacarTexto(artigo.numero, termo)}</span>
        <div class="artigo-texto">${aplicarDestaques(artigo.texto, termo)}</div>
      </div>
      ${htmlItens}
    `;
    
    container.appendChild(card);
  });
}

function formatarItemJuridico(texto, termoBusca) {
  let textoFormatado = aplicarDestaques(texto, termoBusca);
  const regexInicio = /^([IVX]+ -|§ \d+º|§ \d+|Parágrafo único\.|[a-z]\))/i;
  const match = texto.match(regexInicio);
  
  if (match) {
    const label = match[0];
    const restoDoTexto = textoFormatado.replace(label, '');
    const labelClass = label.includes('§') || label.includes('Parágrafo') ? 'item-label item-label-paragraph' : 'item-label';
    return `<span class="${labelClass}">${label}</span>${restoDoTexto}`;
  }
  return textoFormatado;
}

// --- FILTRO ROBUSTO ---

function filtrarRenderizar(termoOriginal) {
  const termo = termoOriginal.trim();
  
  if (!termo) {
    renderizarNorma(normaCompleta);
    return;
  }

  const termoNorm = normalizarTexto(termo);
  const stats = { capitulos: 0, secoes: 0, artigos: 0, itens: 0 };

  const dadosFiltrados = normaCompleta.map(bloco => {
    const isCapitulo = bloco.titulo.toUpperCase().includes("CAPÍTULO");
    const isSecao = bloco.titulo.toUpperCase().includes("SEÇÃO");

    const artigosFiltrados = bloco.artigos.filter(art => {
      // Busca Normalizada (Robustez)
      const matchTexto = normalizarTexto(art.texto).includes(termoNorm);
      const matchNum = normalizarTexto(art.numero).includes(termoNorm);
      
      const itensMatchCount = art.itens.filter(i => 
        normalizarTexto(i).includes(termoNorm)
      ).length;
      
      if (matchTexto || matchNum || itensMatchCount > 0) {
        stats.artigos++;
        stats.itens += itensMatchCount;
        return true;
      }
      return false;
    });

    const matchTitulo = normalizarTexto(bloco.titulo).includes(termoNorm);
    
    if (artigosFiltrados.length > 0 || matchTitulo) {
      if(isCapitulo) stats.capitulos++;
      if(isSecao) stats.secoes++;
      
      return {
        ...bloco,
        artigos: artigosFiltrados.length > 0 ? artigosFiltrados : bloco.artigos
      };
    }
    return null;
  }).filter(c => c !== null);

  renderizarNorma(dadosFiltrados, termo, stats);
}

function atualizarContador(termo, stats) {
  if (!termo) {
    contador.innerText = "Exibindo norma completa. Clique nos capítulos para expandir.";
    return;
  }

  if (stats) {
    const partes = [];
    if(stats.capitulos > 0) partes.push(`<strong>${stats.capitulos}</strong> Capítulos`);
    if(stats.secoes > 0) partes.push(`<strong>${stats.secoes}</strong> Seções`);
    if(stats.artigos > 0) partes.push(`<strong>${stats.artigos}</strong> Artigos`);
    if(stats.itens > 0) partes.push(`<strong>${stats.itens}</strong> Itens encontrados`);
    
    if (partes.length === 0) {
      contador.innerHTML = "Termo não encontrado.";
    } else {
      contador.innerHTML = `Encontrados: ${partes.join(', ')}.`;
    }
  }
}

// Highlight insensível a maiúsculas/minúsculas
function destacarTexto(texto, termo) {
  if (!termo) return texto;
  // Escapa caracteres especiais do regex
  const cleanTerm = termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Como o texto original tem acentos e o termo pode não ter,
  // o highlight perfeito exige mapeamento complexo. 
  // Solução simples: Highlight apenas se match exato de string (case insensitive)
  // Se quiser highlight robusto para acentos, exigiria substituir o texto original normalizado, o que quebra a formatação.
  // Mantemos o highlight case-insensitive padrão visualmente.
  
  try {
    const regex = new RegExp(`(${cleanTerm})`, 'gi');
    return texto.replace(regex, '<mark>$1</mark>');
  } catch(e) {
    return texto;
  }
}

function aplicarDestaques(texto, termoBusca) {
  let novoTexto = destacarTexto(texto, termoBusca);
  KEYWORDS.forEach(kw => {
    const regex = new RegExp(`\\b(${kw})\\b`, 'gi');
    novoTexto = novoTexto.replace(regex, '<span class="keyword-highlight">$1</span>');
  });
  return novoTexto;
}