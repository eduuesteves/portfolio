import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  as = "button",
  ...props
}) => {
  const combinedClasses = [
    styles.button,
    styles[variant],
    styles[size],
    isLoading ? styles.loading : "",
    className,
  ].filter(Boolean).join(" ");

  if (as === "a") {
    return (
      <a className={combinedClasses} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {isLoading ? <span className={styles.spinner} /> : children}
    </button>
  );
};