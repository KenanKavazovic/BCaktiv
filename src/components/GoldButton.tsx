import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "default" | "navbar";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants = {
  default: "text-[16px] leading-[120%] tracking-[0.02em]",
  navbar: "text-[14px] leading-[150%] tracking-[0]",
};

export default function GoldButton({
  children,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-[20px] bg-primary-gold px-4 py-1 font-dm-sans font-medium text-white transition-all duration-200
      hover:bg-[#bfa048] hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(206,171,82,0.25)]
      active:bg-[#a88f3f] active:translate-y-0 active:shadow-[0_2px_6px_rgba(0,0,0,0.2)]
      ${variants[variant]}
      ${className}`}
    >
      {children}
    </button>
  );
}