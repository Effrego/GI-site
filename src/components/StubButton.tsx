type StubButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline";
};

export default function StubButton({ children, variant = "solid" }: StubButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide cursor-not-allowed select-none transition-colors";

  const styles =
    variant === "solid"
      ? "bg-neutral-100/20 text-neutral-500 border border-neutral-100/10"
      : "bg-transparent text-neutral-500 border border-neutral-700";

  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      title="Ссылка будет добавлена позже"
      className={`${base} ${styles}`}
    >
      {children}
    </button>
  );
}
