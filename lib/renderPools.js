// import { poolsConfig } from './data/pools.js';
// import { isBigScreen } from './utils.js';

import { createCirclePoolSVG } from './svg/circlePool';
import { createAmericaPoolSVG } from './svg/americaPool';
import { createGlobePoolSVG } from './svg/globePool';
import { createRectanglePoolSVG } from './svg/rectanglePool';
import { createSquareSmallPoolSVG } from './svg/squareSmallPool';
import { createSquareBigPoolSVG } from './svg/squareBigPool';
import { createDeadSeaPoolSVG } from './svg/deadSeaPool';
import { getUIColor } from './utils';

const SVG_TYPES = {
  CIRCLE: 'CIRCLE',
  DEAD_SEA: 'DEAD_SEA',
  GLOBE: 'GLOBE_POOL',
  RECTANGLE: 'RECTANGLE_POOL',
  SQUARE_BIG: 'SQUARE_BIG_POOL',
  SQUARE_SMALL: 'SQUARE_SMALL_POOL',
  AMERICA: 'AMERICA_POOL',
};

export function renderPools(poolsData) {
  const container = document.getElementById('pools-container');
  // const isFullscreen = isBigScreen();

  poolsData.forEach((pool) => {
    // const svgElement = createSVGElement(pool, isFullscreen);
    // const svgElement = createSVGElement(pool);

    const colorFromThresolds = getUIColor(pool.colorThresholds, pool.occupancy);

    const poolWithColor = { color: colorFromThresolds, ...pool };

    let svgElementToRender;

    switch (pool.type) {
      case SVG_TYPES.CIRCLE:
        svgElementToRender = createCirclePoolSVG(poolWithColor);
        break;
      case SVG_TYPES.AMERICA:
        svgElementToRender = createAmericaPoolSVG(poolWithColor);
        break;
      case SVG_TYPES.GLOBE:
        svgElementToRender = createGlobePoolSVG(poolWithColor);
        break;
      case SVG_TYPES.RECTANGLE:
        svgElementToRender = createRectanglePoolSVG(poolWithColor);
        break;
      case SVG_TYPES.SQUARE_SMALL:
        svgElementToRender = createSquareSmallPoolSVG(poolWithColor);
        break;
      case SVG_TYPES.SQUARE_BIG:
        svgElementToRender = createSquareBigPoolSVG(poolWithColor);
        break;
      case SVG_TYPES.DEAD_SEA:
        svgElementToRender = createDeadSeaPoolSVG(poolWithColor);
        break;

      default:
        break;
    }

    // create a div to hold the svg
    const svgWrapper = document.createElement('div');

    svgWrapper.style.position = 'absolute';
    svgWrapper.style.left = `${pool.positionDefault.x}%`;
    svgWrapper.style.top = `${pool.positionDefault.y}%`;

    svgWrapper.appendChild(svgElementToRender);

    container.appendChild(svgWrapper);
  });
}
