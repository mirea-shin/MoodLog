interface ButtonProps {
  type: 'submit';
  text: string;
}

export default function Button({ type, text }: ButtonProps) {
  return <button type={type}>{text}</button>;
}
