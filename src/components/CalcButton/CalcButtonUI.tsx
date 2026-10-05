import type { CalcButtonProps } from "./index";

export default function CalcButtonUI({ operation, action }: CalcButtonProps) {
  return <button onClick={action}>{operation}</button>;
}
