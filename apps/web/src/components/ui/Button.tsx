import { clsx } from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-violet-600 text-white hover:bg-violet-500"
          : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}