export function createSquareBigPoolSVG({
  color = '#8ad1fc',
  size = 49,
  fillOpacity = 1,
  name = '',
}) {
  const svgNamespace = 'http://www.w3.org/2000/svg';

  const svg = document.createElementNS(svgNamespace, 'svg');

  svg.setAttribute('height', size);
  svg.setAttribute('width', size);
  svg.setAttribute('viewBox', '0 0 137.48413 138.04907');

  const g = document.createElementNS(svgNamespace, 'g');

  g.setAttribute('transform', 'translate(-2160.5496,-656.85737)');

  const path = document.createElementNS(svgNamespace, 'path');

  path.setAttribute(
    'd',
    'm 2162.6602,686.32115 27.7264,106.46943 105.5453,-27.91126 -27.1719,-105.9149 z',
  );
  path.setAttribute('style', `fill: ${color}; fill-opacity: ${fillOpacity};`);

  const text = document.createElementNS(svgNamespace, 'text');

  text.setAttribute('dominant-baseline', 'middle');
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('x', '50%');
  text.setAttribute('y', '50%');
  text.setAttribute(
    'style',
    'font-size: 1.6rem; fill: white; text-transform: uppercase; font-weight: 600;',
  );
  text.textContent = name;

  g.appendChild(path);
  svg.appendChild(g);
  svg.appendChild(text);

  return svg;
}
