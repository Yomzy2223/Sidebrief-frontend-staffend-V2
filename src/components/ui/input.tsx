import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default: "py-4 px-6",
        transparent:
          "bg-transparent text-foreground border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none !px-0 !mt-0 ",
      },
      size: {
        default: "h-12",
        md: "h-12",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "transparent" | null | undefined;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, variant, size, ...props }, ref) => {
    className = cn(
      className,
      `${type === "password" ? "pr-12" : ""}`,
      error ? "focus-visible:ring-0 border-destructive " : ""
    );
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
