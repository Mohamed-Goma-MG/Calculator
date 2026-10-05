import CalcButtonUI from "@/components/CalcButton/CalcButtonUI";

export type CalcButtonProps = {
  operation: string;
  action: () => void;
};

export default function CalcButton({ operation, action }: CalcButtonProps) {
  return <CalcButtonUI operation={operation} action={action} />;
}
