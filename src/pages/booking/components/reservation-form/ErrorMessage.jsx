export function ErrorMessage({ children, className }) {
  return (
    <p
      className={`font-base block text-[10px] tracking-[-0.13px] text-red ${className}`}
    >
      {children}
    </p>
  );
}
