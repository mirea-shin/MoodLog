interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
export default function Card({ children, style, className }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center ${className}`}
      style={{ ...style }}
    >
      {children}
    </div>
  );
}
