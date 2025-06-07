"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root> & {
  style?: React.CSSProperties;
};

function Label({ style, ...props }: LabelProps) {
  // Inline styles mimicking your Tailwind classes
  const baseStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem", // gap-2 = 8px (0.5rem)
    fontSize: "0.875rem", // text-sm = 14px
    lineHeight: 1, // leading-none
    fontWeight: 500, // font-medium
    userSelect: "none",
  };

  // Disabled styles
  const disabledStyles: React.CSSProperties = props["aria-disabled"]
    ? {
        pointerEvents: "none",
        opacity: 0.5,
        cursor: "not-allowed",
      }
    : {};

  return (
    <LabelPrimitive.Root
      data-slot="label"
      style={{ ...baseStyles, ...disabledStyles, ...style }}
      {...props}
    />
  );
}

export { Label };
