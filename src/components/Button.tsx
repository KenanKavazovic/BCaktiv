import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "default" | "navbar" | "clear";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants = {
  default:
    "rounded-[30px] px-5 py-3.5 text-[16px] leading-[120%] tracking-[0.02em] gap-2.5 bg-primary-gold text-white hover:bg-[#bfa048] hover:shadow-[0_4px_12px_rgba(206,171,82,0.25)] active:bg-[#a88f3f] active:shadow-[0_2px_6px_rgba(0,0,0,0.2)]",

  navbar:
    "rounded-[20px] px-4 py-1 text-[14px] leading-[150%] tracking-[0] gap-2 bg-primary-gold text-white hover:bg-[#bfa048] hover:shadow-[0_4px_12px_rgba(206,171,82,0.25)] active:bg-[#a88f3f] active:shadow-[0_2px_6px_rgba(0,0,0,0.2)]",

  clear:
    "rounded-[30px] px-5 py-3.5 text-[16px] leading-[120%] tracking-[0.02em] gap-2.5 border border-white/40 bg-transparent text-white hover:bg-transparent hover:border-white/60 active:bg-white/15",
};

export default function Button({
  children,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center
        font-dm-sans font-medium
        transition-all duration-200
        hover:-translate-y-[1px]
        active:translate-y-0 active:scale-[0.98]
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}