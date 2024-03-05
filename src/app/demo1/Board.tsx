import Tile from "./Tile";

export default function Board() {
  return (
    <svg className="h-[calc(100vh-2em)] w-screen bg-stone-600" viewBox="0 0 100 100">
      <defs>
        <pattern id="f-gray" height="100%" width="100%" patternContentUnits="objectBoundingBox">
          <image height="1" width="1" preserveAspectRatio="none" href="/gray2.png" />
        </pattern>
        <pattern id="f-red" height="100%" width="100%" patternContentUnits="objectBoundingBox">
          <image height="1" width="1" preserveAspectRatio="none" href="/gray2.png" />
          <rect x="0" y="0" width="10" height="10" fill="#EB4457" fillOpacity="0.5" />
        </pattern>
        <pattern id="f-blue" height="100%" width="100%" patternContentUnits="objectBoundingBox">
          <image height="1" width="1" preserveAspectRatio="none" href="/gray2.png" />
          <rect x="0" y="0" width="10" height="10" fill="#2764EB" fillOpacity="0.5" />
        </pattern>
      </defs>
      <Tile x={50} y={15} text="1" />
      <Tile x={40} y={31.5} text="2" />
      <Tile x={60} y={31.5} text="3" />
      <Tile x={30} y={48} text="4" />
      <Tile x={50} y={48} text="5" />
      <Tile x={70} y={48} text="6" />
      <Tile x={20} y={64.5} text="7" />
      <Tile x={40} y={64.5} text="8" />
      <Tile x={60} y={64.5} text="9" />
      <Tile x={80} y={64.5} text="10" />
    </svg>
  );
}