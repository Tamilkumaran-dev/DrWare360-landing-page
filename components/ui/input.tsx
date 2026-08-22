import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-[50px] w-full rounded-lg border border-[#e2ebf0] bg-white px-4 py-2 text-[14px] font-[500] text-[var(--ink)] shadow-[0_4px_12px_rgba(49,80,102,0.03)] transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#91a0aa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:border-[var(--blue)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
