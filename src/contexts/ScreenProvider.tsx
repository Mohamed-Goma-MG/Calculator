import { type ReactNode, useContext } from "react";
import { ScreenContext } from "./ScreenContext";

function ScreenProvider({ children }: { children: ReactNode }) {
  return (
    <ScreenContext.Provider value={{ ...useContext(ScreenContext) }}>
      {children}
    </ScreenContext.Provider>
  );
}

export { ScreenProvider };
