import Tile from "./Tile";

export default function Board() {
  return (
    <svg className="h-[calc(100vh-2em)] w-screen bg-stone-600" viewBox="0 0 100 100">
      <Tile x={50} y={15} text="1" />
      <Tile x={40} y={31} text="2" />
      <Tile x={60} y={31} text="3" />
      <Tile x={30} y={47} text="4" />
      <Tile x={50} y={47} text="5" />
      <Tile x={70} y={47} text="6" />
      <Tile x={20} y={63} text="7" />
      <Tile x={40} y={63} text="8" />
      <Tile x={60} y={63} text="9" />
      <Tile x={80} y={63} text="10" />
    </svg>
  );
}