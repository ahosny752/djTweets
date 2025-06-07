import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

const variantStyles = {
  default: {
    backgroundColor: "#1d4ed8",
    color: "#ffffff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    hover: { backgroundColor: "#1e40af" },
  },
  destructive: {
    backgroundColor: "#dc2626",
    color: "#ffffff",
    hover: { backgroundColor: "#b91c1c" },
  },
  outline: {
    backgroundColor: "#ffffff",
    color: "#000000",
    border: "1px solid #e5e7eb",
    hover: { backgroundColor: "#f1f5f9" },
  },
  secondary: {
    backgroundColor: "#f3f4f6",
    color: "#111827",
    hover: { backgroundColor: "#e5e7eb" },
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#1f2937",
    hover: { backgroundColor: "#f9fafb" },
  },
  link: {
    backgroundColor: "transparent",
    color: "#1d4ed8",
    textDecoration: "underline",
  },
};

const sizeStyles = {
  default: {
    height: "36px",
    padding: "8px 16px",
    fontSize: "14px",
  },
  sm: {
    height: "32px",
    padding: "6px 12px",
    fontSize: "14px",
  },
  lg: {
    height: "40px",
    padding: "10px 20px",
    fontSize: "16px",
  },
  icon: {
    width: "36px",
    height: "36px",
    padding: "0",
  },
};

type Variant = keyof typeof variantStyles;
type Size = keyof typeof sizeStyles;

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
};

export function Button({
  variant = "default",
  size = "default",
  asChild = false,
  style,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const combinedStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    whiteSpace: "nowrap",
    borderRadius: "6px",
    fontWeight: 500,
    transition: "all 0.2s ease",
    pointerEvents: disabled ? "none" : "auto",
    opacity: disabled ? 0.5 : 1,
    border: "none",
    outline: "none",
    ...(variantStyle || {}),
    ...(sizeStyle || {}),
    ...style,
  };

  return <Comp style={combinedStyles} disabled={disabled} {...props} />;
}
