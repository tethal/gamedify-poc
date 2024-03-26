"use client";

import { useState } from "react";


interface TileProps {
  x: number;
  y: number;
  text: string;
}

const COLORS = ['url(#f-gray)', 'url(#f-red)', 'url(#f-blue)']

export default function Tile({ x, y, text }: TileProps) {
  const [color, setColor] = useState<number>(0);
  return (
    <g className="cursor-pointer select-none" transform={`translate(${x}, ${y})`} onClick={() => setColor((color + 1) % 3)}>
      <polygon
        fill={COLORS[color]} points="9,-5 0,-10 -9,-5 -9,5 0,10 9,5" />
      <text x="0" y="1" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#303030">{text}</text>
    </g>
  )
}
