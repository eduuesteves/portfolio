import { HTMLAttributes, forwardRef } from "react";
import styles from "./Card.module.scss";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "interactive" | "glass";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  variant = "default",
  className = "",
  ...props
}, ref) => {
  const combinedClasses = [
    styles.card,
    styles[variant],
    className,
  ].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={combinedClasses} {...props}>
      {children}
    </div>
  );
});

Card.displayName = "Card";