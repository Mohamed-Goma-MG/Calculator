type CalcButtonProps = {
  operation: string;
  action: () => void;
};

export default function CalcButton({ operation, action }: CalcButtonProps) {
  return <button onClick={action}>{operation}</button>;
}
