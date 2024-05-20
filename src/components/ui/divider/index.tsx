import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs/utils";

const dividerVariants = cva("text-muted-foreground", {
  variants: {
    orientation: {
      vertical: "border-l border-t-0 border-r-0 border-b-0",
      horizontal: "border-t w-full border-l-0 border-r-0 border-b-0",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface DividerProps extends VariantProps<typeof dividerVariants> {}

const Divider = ({ orientation }: DividerProps) => {
  return <div className={cn(dividerVariants({ orientation }))} />;
};
Divider.displayName = "Divider";

export { Divider, dividerVariants };
