// import { poolsConfig } from './data/pools.js';
// import { isBigScreen } from './utils.js';

// eslint-disable-next-line no-unused-vars
function createSVGElement(pool, isFullscreen) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  // Aquí implementaremos la lógica para crear el SVG según el tipo de piscina
  // Por ahora, solo crearemos un círculo como ejemplo
  const circle = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle',
  );

  // const position = isFullscreen ? pool.positionBigScreen : pool.positionDefault;
  const position = pool.positionDefault;

  svg.setAttribute('width', pool.size);
  svg.setAttribute('height', pool.size);
  svg.style.position = 'absolute';
  svg.style.left = `${position.x}%`;
  svg.style.top = `${position.y}%`;

  circle.setAttribute('cx', pool.size / 2);
  circle.setAttribute('cy', pool.size / 2);
  circle.setAttribute('r', pool.size / 2);
  // circle.setAttribute('fill', 'rgba(255, 255, 255, 0.5)');
  circle.setAttribute('fill', 'red');

  svg.appendChild(circle);

  return svg;
}

export function renderPools(poolsData) {
  const container = document.getElementById('pools-container');
  // const isFullscreen = isBigScreen();

  poolsData.forEach((pool) => {
    // const svgElement = createSVGElement(pool, isFullscreen);
    const svgElement = createSVGElement(pool);

    console.log(svgElement);

    container.appendChild(svgElement);
  });
}
