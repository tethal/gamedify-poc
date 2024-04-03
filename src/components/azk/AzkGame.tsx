"use client";

import { AzkGameData } from "@/lib/fetch-game";
import { useAzkGame } from "./azk-hook";
import { useState } from "react";
import AzkBoard from "@/components/azk/AzkBoard";

export default function AzkGame({ data }: { data: AzkGameData }) {
  const [answer, setAnswer] = useState("");
  const game = useAzkGame(data);
  return <>
    playerOnTurn: {game.playerOnTurn}<br />
    winner: {game.winner ?? "none"}<br />
    <AzkBoard className="h-[800px] w-screen bg-stone-600" tileSize={10} tileStates={game.tileStates} onTileClicked={async (index) => await game.selectTile(index)}/>
    {game.currentQuestion && <>
      currentQuestion: {game.currentQuestion ?? "none"}<br />
      <input className="border p-2 mr-2" type="text" placeholder="answer" onChange={e => setAnswer(e.target.value)} />
      <button className="border p-2" onClick={async () => await game.checkAnswer(answer)}>Submit</button>
    </>}
  </>;
}
