interface FormProps {
  children: React.ReactNode;
  onSubmit: () => void;
}

export default function Form({ children, onSubmit }: FormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
}
