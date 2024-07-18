export interface TileLayout {
  index: number; // the zero-based index of the tile
  q: number; // the horizontal component of the axial coordinates (from -r to 0)
  r: number; // the vertical component of the axial coordinates (from 0 to rows - 1)
  x: number; // the x coordinate in pixels
  y: number; // the y coordinate in pixels
}

export interface BoardLayout {
  tileWidth: number; // the width of a tile in pixels
  tileHeight: number; // the height of a tile in pixels
  boardMinX: number; // the minimum x coordinate of the board in pixels
  boardMinY: number; // the minimum y coordinate of the board in pixels
  boardWidth: number; // the width of the board in pixels
  boardHeight: number; // the height of the board in pixels
  tiles: TileLayout[]; // the tiles, from top to bottom, left to right
}

const triangular = (n: number) => (n * (n + 1)) / 2;
const triangularInverse = (n: number) =>
  Math.floor((Math.sqrt(1 + 8 * n + 1) - 1) / 2);

export const createBoardLayout = (
  maxTileCount: number,
  tileSize: number,
): BoardLayout => {
  console.assert(maxTileCount > 0, 'maxTileCount must be positive');
  const sqrt3 = Math.sqrt(3);
  const rows = triangularInverse(maxTileCount);
  const tileWidth = sqrt3 * tileSize;
  const tileHeight = 2 * tileSize;
  const boardWidth = Math.ceil(sqrt3 * tileSize * rows);
  const boardHeight = Math.ceil((1.5 * (rows - 1) + 2) * tileSize);
  const boardMinX = -boardWidth / 2;
  const boardMinY = -tileSize;

  const toPixelCoords = (q: number, r: number) => ({
    x: tileSize * (sqrt3 * q + (sqrt3 * r) / 2),
    y: tileSize * 1.5 * r,
  });
  const tiles: TileLayout[] = Array.from({ length: rows }).flatMap((_, row) => {
    return Array.from({ length: row + 1 }, (_, col) => {
      const index = triangular(row) + col;
      const q = -row + col;
      const r = row;
      return { index, q, r, ...toPixelCoords(q, r) };
    });
  });
  return {
    tileWidth,
    tileHeight,
    boardMinX,
    boardMinY,
    boardWidth,
    boardHeight,
    tiles,
  };
};

/**
 * Calculate the vertices of a regular polygon.
 * @param n the number of vertices
 * @param size the radius of the polygon
 * @param rotation the rotation of the polygon in degrees (0 means the first vertex is on the right)
 */
export const calcPolygonVertices = (
  n: number,
  size: number,
  rotation: number = 0,
): { x: number; y: number }[] => {
  return Array.from(Array(n), (_, i) => {
    const angleRad = (Math.PI / 180) * ((360 * i) / n + rotation);
    return { x: size * Math.cos(angleRad), y: size * Math.sin(angleRad) };
  });
};
