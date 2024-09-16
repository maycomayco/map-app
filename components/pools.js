import { createCirclePoolSVG } from '../lib/svg/circlePool';
import { createAmericaPoolSVG } from '../lib/svg/americaPool';
import { createGlobePoolSVG } from '../lib/svg/globePool';
import { createRectanglePoolSVG } from '../lib/svg/rectanglePool';
import { createSquareSmallPoolSVG } from '../lib/svg/squareSmallPool';
import { createSquareBigPoolSVG } from '../lib/svg/squareBigPool';
import { createDeadSeaPoolSVG } from '../lib/svg/deadSeaPool';
import { getUIColor, isBigScreen } from '../lib/utils';
import { SVG_TYPES } from '../lib/constants';

export function pools(poolsData) {
  // const container = document.getElementById('pools-container');
  const container = document.getElementById('map-and-pools');

  poolsData.forEach((pool) => {
    const colorFromThresolds = getUIColor(pool.colorThresholds, pool.occupancy);

    const poolWithColor = { color: colorFromThresolds, ...pool };

    const size = isBigScreen() ? pool.size * 2 : pool.size;

    let svgElementToRender;

    switch (pool.type) {
      case SVG_TYPES.CIRCLE:
        svgElementToRender = createCirclePoolSVG({
          ...poolWithColor,
          size,
        });
        break;
      case SVG_TYPES.AMERICA:
        svgElementToRender = createAmericaPoolSVG({ ...poolWithColor, size });
        break;
      case SVG_TYPES.GLOBE:
        svgElementToRender = createGlobePoolSVG({ ...poolWithColor, size });
        break;
      case SVG_TYPES.RECTANGLE:
        svgElementToRender = createRectanglePoolSVG({ ...poolWithColor, size });
        break;
      case SVG_TYPES.SQUARE_SMALL:
        svgElementToRender = createSquareSmallPoolSVG({
          ...poolWithColor,
          size,
        });
        break;
      case SVG_TYPES.SQUARE_BIG:
        svgElementToRender = createSquareBigPoolSVG({ ...poolWithColor, size });
        break;
      case SVG_TYPES.DEAD_SEA:
        svgElementToRender = createDeadSeaPoolSVG({ ...poolWithColor, size });
        break;

      default:
        break;
    }

    // create a div to hold the svg
    const svgWrapper = document.createElement('div');

    svgWrapper.style.position = 'absolute';
    svgWrapper.style.left = isBigScreen()
      ? `${pool.positionBigScreen.x}%`
      : `${pool.positionDefault.x}%`;
    svgWrapper.style.top = isBigScreen()
      ? `${pool.positionBigScreen.y}%`
      : `${pool.positionDefault.y}%`;

    svgWrapper.appendChild(svgElementToRender);

    container.appendChild(svgWrapper);
  });
}
