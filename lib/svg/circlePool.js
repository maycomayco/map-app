export function createCirclePoolSVG({
  color = '#8ad1fc',
  size = 34,
  fillOpacity = 1,
  name = '',
} = {}) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svg.setAttribute('height', size);
  svg.setAttribute('width', size);
  svg.setAttribute('viewBox', '0 0 56.005371 54.859862');

  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  g.setAttribute('transform', 'translate(0, 0)');

  const ellipse = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'ellipse',
  );

  ellipse.setAttribute('cx', '28');
  ellipse.setAttribute('cy', '28');
  ellipse.setAttribute('rx', '25.71');
  ellipse.setAttribute('ry', '25.14');
  ellipse.setAttribute('fill', color);
  ellipse.setAttribute('fill-opacity', fillOpacity);

  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

  text.setAttribute('dominant-baseline', 'middle');
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('x', '28');
  text.setAttribute('y', '28');
  text.textContent = name;

  text.style.fontSize = '1rem';
  text.style.fill = 'white';
  text.style.textTransform = 'uppercase';
  text.style.fontWeight = '600';

  g.appendChild(ellipse);
  svg.appendChild(g);
  svg.appendChild(text);

  return svg;
}
