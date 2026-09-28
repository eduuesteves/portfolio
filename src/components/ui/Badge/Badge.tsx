import React, { HTMLAttributes } from "react";
import styles from "./Badge.module.scss";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
  variant?: "solid" | "subtle" | "outline";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  color = "var(--accent)",
  variant = "subtle",
  className = "",
  style,
  ...props
}) => {
  const customStyle = {
    "--badge-color": color,
    ...style,
  } as React.CSSProperties;

  const combinedClasses = [
    styles.badge,
    styles[variant],
    className,
  ].filter(Boolean).join(" ");

  return (
    <span className={combinedClasses} style={customStyle} {...props}>
      {children}
    </span>
  );
};