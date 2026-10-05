import { createContext } from "react";

type ScreenContextProps = {
  text: string;
  result: number | undefined | null;
};

const ScreenContext = createContext<ScreenContextProps>({
  text: "5+5*4/2-3",
  result: 12,
});

export { ScreenContext };
