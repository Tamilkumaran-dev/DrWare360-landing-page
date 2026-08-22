import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <button
        className={`inline-flex justify-center items-center gap-[9px] min-h-[52px] px-[22px] rounded-lg bg-[#0c85e9] text-white font-[750] text-[15px] shadow-[0_12px_30px_rgba(12,133,233,0.18)] transition-all hover:-translate-y-[2px] hover:shadow-[0_17px_38px_rgba(12,133,233,0.26)] disabled:opacity-50 disabled:pointer-events-none ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
