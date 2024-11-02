// components/ui/Popover.tsx
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
   React.ElementRef<typeof PopoverPrimitive.Content>,
   React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 8, ...props }, ref) => (
   <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
         ref={ref}
         align={align}
         sideOffset={sideOffset}
         className={cn(
            "z-50 w-80 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 shadow-lg outline-none transition-transform duration-200 ease-in-out",
            "data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut",
            "data-[state=open]:scale-100 data-[state=closed]:scale-95",
            "data-[side=bottom]:animate-slideInFromTop data-[side=left]:animate-slideInFromRight",
            "data-[side=right]:animate-slideInFromLeft data-[side=top]:animate-slideInFromBottom",
            "hover:shadow-xl",
            className,
         )}
         {...props}
      />
   </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
