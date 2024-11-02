// components/ui/Input.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type = "text", ...props }, ref) => {
   return (
      <input
         type={type}
         className={cn(
            "flex h-10 w-full rounded-lg border border-neutral-300  px-4 py-2 text-base font-medium text-neutral-800 shadow-sm transition-all duration-300 ease-in-out",
            "focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 focus:outline-none",
            "hover:shadow-md hover:bg-neutral-100 placeholder:text-neutral-400",
            "disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:opacity-60",
            "file:border-0 file:bg-neutral-100 file:text-sm file:font-medium file:text-primary-500",
            className,
         )}
         ref={ref}
         {...props}
      />
   );
});

Input.displayName = "Input";

export { Input };
