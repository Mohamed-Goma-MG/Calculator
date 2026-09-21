import "./App.css";

import { ScreenProvider } from "./contexts/ScreenProvider";

import ScreenBoard from "./components/ScreenBoard";
import NumbersBoard from "./components/NumbersBoard";

function App() {
  return (
    <>
      <ScreenProvider>
        <ScreenBoard />
        <NumbersBoard />
      </ScreenProvider>
    </>
  );
}

export default App;
