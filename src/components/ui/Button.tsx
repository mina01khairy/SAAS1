"use client";

import { forwardRef, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import clsx from "@/lib/clsx";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "dark";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: Variant;
  size?: Size;
  icon?: IconDefinition;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20 shadow-md",
  secondary:
    "bg-secondary-container text-on-secondary-container hover:opacity-90",
  outline:
    "border border-outline-variant text-on-surface hover:bg-surface-container-low bg-transparent",
  ghost: "text-on-surface-variant hover:bg-surface-container-low bg-transparent",
  danger: "bg-error text-on-error hover:opacity-90 shadow-md shadow-error/20",
  dark: "bg-on-surface text-surface hover:bg-on-surface-variant",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-label-sm rounded-lg gap-1.5",
  md: "px-5 py-2.5 text-label-md rounded-lg gap-2",
  lg: "px-8 py-3.5 text-label-md rounded-xl gap-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      isLoading,
      fullWidth,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
        disabled={disabled || isLoading}
        className={clsx(
          "inline-flex items-center justify-center font-label-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <FontAwesomeIcon icon={icon} className="text-[0.9em]" />
            )}
            {children}
            {icon && iconPosition === "right" && (
              <FontAwesomeIcon icon={icon} className="text-[0.9em]" />
            )}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
