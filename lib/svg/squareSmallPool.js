export function createSquareSmallPoolSVG({
  color = '#8ad1fc',
  size = 25,
  fillOpacity = 1,
  name = '',
} = {}) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');

  svg.setAttribute('height', size);
  svg.setAttribute('width', size);
  svg.setAttribute('viewBox', '0 0 67.721191 66.932921');

  const g = document.createElementNS(svgNS, 'g');

  g.setAttribute('transform', 'translate(-2130.7476,-988.41426)');

  const path = document.createElementNS(svgNS, 'path');

  path.setAttribute(
    'd',
    'm 2132.8948,1003.0951 14.1238,50.1496 49.3309,-12.8956 -13.305,-49.84257 z',
  );
  path.setAttribute('style', `fill: ${color}; fill-opacity: ${fillOpacity};`);

  const text = document.createElementNS(svgNS, 'text');

  text.setAttribute('dominant-baseline', 'middle');
  text.setAttribute(
    'style',
    'font-size: 1rem; fill: white; text-transform: uppercase; font-weight: 600;',
  );
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('x', '50%');
  text.setAttribute('y', '50%');
  text.textContent = name;

  g.appendChild(path);
  svg.appendChild(g);
  svg.appendChild(text);

  return svg;
}
