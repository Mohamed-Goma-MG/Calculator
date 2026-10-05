import { useContext } from "react";
import { ScreenContext } from "@/contexts/ScreenContext";

export default function ScreenPadUI() {
  const { text, result } = useContext(ScreenContext);

  return (
    <div className="screenpad">
      <input className="text" value={text} />
      <div className="result">{result}</div>
    </div>
  );
}
