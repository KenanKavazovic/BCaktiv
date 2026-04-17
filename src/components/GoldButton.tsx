import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function GoldButton({ children, className = "" }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-[20px] bg-main-gold-1 px-4 py-1 font-dm-sans text-[14px] font-medium leading-[150%] text-white transition-all duration-200
      hover:bg-[#bfa048] hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(206,171,82,0.25)]
      active:bg-[#a88f3f] active:translate-y-0 active:shadow-[0_2px_6px_rgba(0,0,0,0.2)]
      ${className}`}
    >
      {children}
    </button>
  );
}