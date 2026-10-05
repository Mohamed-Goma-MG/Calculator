import "./App.css";

import ScreenProvider from "@/contexts/ScreenProvider";

import ScreenPad from "@/components/ScreenPad";
import NumPad from "@/components/NumPad";

function App() {
  return (
    <>
      <ScreenProvider>
        <ScreenPad />
        <NumPad />
      </ScreenProvider>
    </>
  );
}

export default App;
