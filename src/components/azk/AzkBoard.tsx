import {TileState} from "@/components/azk/azk-hook";
import {createBoardLayout} from "@/lib/azk";
import AzkTile from "@/components/azk/AzkTile";

interface BoardProps {
    tileSize: number;
    tileStates: TileState[];
    className?: string;
    onTileClicked: (index: number) => void;
}

export default function AzkBoard({tileSize, tileStates, className, onTileClicked}: BoardProps) {
    const layout = createBoardLayout(tileStates.length, tileSize);
    return (
        <svg className={className} viewBox={`${layout.boardMinX} ${layout.boardMinY} ${layout.boardWidth} ${layout.boardHeight}`}>
            {layout.tiles.map(tile =>
                <AzkTile
                    key={tile.index}
                    x={tile.x} y={tile.y} label={(tile.index + 1).toString()} size={tileSize * 0.99}
                    state={tileStates[tile.index]}
                    onClick={() => onTileClicked(tile.index)}
                />
            )}
        </svg>
    );
}
