import * as React from "react";
import { X } from "lucide-react";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const DialogContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>({
  open: false,
  onOpenChange: () => {},
});

export function Dialog({ open = false, onOpenChange, children }: DialogProps) {
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      setIsOpen(newOpen);
      onOpenChange?.(newOpen);
    },
    [onOpenChange]
  );

  return (
    <DialogContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open, onOpenChange } = React.useContext(DialogContext);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-white/20 backdrop-blur-md transition-all duration-300"
        onClick={() => onOpenChange(false)}
      />
      <div
        className={`relative z-[201] w-full max-w-[520px] rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-8 sm:p-9 shadow-[0_34px_80px_rgba(11,23,36,0.12),_0_0_0_8px_rgba(255,255,255,0.4)] animate-in fade-in zoom-in-95 duration-300 ${className}`}
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-6 top-6 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 hover:bg-[#f4f8fb] focus:outline-none"
        >
          <X className="h-5 w-5 text-[#8ca0af]" />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex flex-col space-y-2 text-center sm:text-left ${className}`}
      {...props}
    />
  );
}

export function DialogTitle({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={`text-[27px] leading-[1.2] font-extrabold font-[var(--font-display)] tracking-tight text-[var(--night-2)] ${className}`}
      {...props}
    />
  );
}

export function DialogDescription({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`text-[15px] leading-[1.68] text-[#627685] ${className}`}
      {...props}
    />
  );
}
