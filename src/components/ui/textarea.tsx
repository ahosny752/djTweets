import * as React from "react";

function Textarea({
  style,
  disabled,
  className,
  ...props
}: React.ComponentProps<"textarea"> & { style?: React.CSSProperties }) {
  // Base styles roughly matching your Tailwind classes:
  const baseStyles: React.CSSProperties = {
    minHeight: "4rem", // min-h-16 (16 * 0.25rem = 4rem)
    width: "100%",
    borderRadius: "0.375rem", // rounded-md = 6px
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#d1d5db", // Tailwind's border-input approx gray-300 (#d1d5db)
    backgroundColor: "transparent",
    padding: "0.5rem 0.75rem", // py-2 px-3
    fontSize: "1rem", // base text size
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", // shadow-xs
    outline: "none",
    resize: "vertical",
    color: disabled ? "rgba(0,0,0,0.5)" : "inherit",
    cursor: disabled ? "not-allowed" : "text",
    opacity: disabled ? 0.5 : 1,
    transition: "color 0.2s ease, box-shadow 0.2s ease",
    fontFamily: "inherit",
    fontWeight: 400,
    lineHeight: 1.5,
  };

  // Focus styles - can’t do :focus-within inline, so adding a simple onFocus/onBlur example:
  const [isFocused, setIsFocused] = React.useState(false);

  const focusStyles: React.CSSProperties = isFocused
    ? {
        borderColor: "#7c3aed", // ring color approx violet-600
        boxShadow: "0 0 0 3px rgba(124, 58, 237, 0.5)", // focus-visible:ring-ring/50
      }
    : {};

  return (
    <textarea
      data-slot="textarea"
      disabled={disabled}
      style={{ ...baseStyles, ...focusStyles, ...style }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
}

export { Textarea };
