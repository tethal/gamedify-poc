"use client";

import { AzkGameData } from "@/lib/fetch-game";
import { useAzkGame } from "./azk-hook";
import { useState } from "react";

export default function AzkGame({ data }: { data: AzkGameData }) {
  const [answer, setAnswer] = useState("");
  const game = useAzkGame(data);
  return <>
    playerOnTurn: {game.playerOnTurn}<br />
    winner: {game.winner ?? "none"}<br />
    <div className="flex flex-col items-center">
      {game.tiles.map((row, i) =>
        <div key={i}>
          {row.map(tile => <button key={tile.index} className="border p-2" onClick={async () => await game.selectTile(tile.index)}>{tile.index}: {tile.state}</button>)}
        </div>
      )}
    </div>
    {game.currentQuestion && <>
      currentQuestion: {game.currentQuestion ?? "none"}<br />
      <input className="border p-2 mr-2" type="text" placeholder="answer" onChange={e => setAnswer(e.target.value)} />
      <button className="border p-2" onClick={async () => await game.checkAnswer(answer)}>Submit</button>
    </>}
  </>;
}
