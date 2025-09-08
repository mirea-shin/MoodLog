interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export default function Card({ children, style }: CardProps) {
  return (
    <div
      className="bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center"
      style={{ ...style }}
    >
      {children}
    </div>
  );
}
