import { useContext } from "react";
import { ScreenContext } from "@/contexts/ScreenContext";

export default function ScreenBoardUI() {
  const { text, result } = useContext(ScreenContext);

  return (
    <div className="screen-board">
      <input className="text" value={text} />
      <div className="result">{result}</div>
    </div>
  );
}
