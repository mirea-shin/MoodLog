interface ButtonProps {
  type: 'submit';
}

export default function Button({ type }: ButtonProps) {
  return <button type={type}>Button</button>;
}
