interface ButtonProps {
  type: 'submit' | 'button';
  text: string;
  onClick?: () => void;
}

export default function Button({ type, text, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {text}
    </button>
  );
}
