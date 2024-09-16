export function createRectanglePoolSVG({
  color = '#8ad1fc',
  size = 48,
  fillOpacity = 1,
  name = '',
} = {}) {
  const scale = 48 / 30.66;
  const svgNS = 'http://www.w3.org/2000/svg';

  const svg = document.createElementNS(svgNS, 'svg');

  svg.setAttribute('height', size / scale);
  svg.setAttribute('width', size);
  svg.setAttribute('viewBox', '0 0 129.56555 82.771605');

  const g = document.createElementNS(svgNS, 'g');

  g.setAttribute('transform', 'translate(-1998.975,-695.49959)');

  const path = document.createElementNS(svgNS, 'path');

  path.setAttribute(
    'd',
    'm 2001.1077,726.06234 13.6783,50.09239 111.6451,-29.94453 -12.7542,-48.61364 z',
  );
  path.style.fill = color;
  path.style.fillOpacity = fillOpacity;

  const text = document.createElementNS(svgNS, 'text');

  text.setAttribute('dominant-baseline', 'middle');
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('x', '50%');
  text.setAttribute('y', '50%');
  text.textContent = name;
  text.style.fontSize = '1rem';
  text.style.fill = 'white';
  text.style.textTransform = 'uppercase';
  text.style.fontWeight = '600';

  g.appendChild(path);
  svg.appendChild(g);
  svg.appendChild(text);

  return svg;
}
