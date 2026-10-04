import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" | "outline" | "danger" }) {
  const styles = {
    primary: "bg-accent text-accent-fg hover:opacity-90",
    ghost: "bg-transparent text-fg hover:bg-raised",
    outline: "border border-border-strong bg-transparent text-fg hover:bg-raised",
    danger: "bg-danger text-fg hover:opacity-90",
  }[variant];
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-opacity disabled:cursor-not-allowed disabled:opacity-40",
        styles,
        className,
      )}
      {...props}
    />
  );
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-border bg-raised px-3 text-sm text-fg outline-none placeholder:text-subtle focus:border-accent",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-md border border-border bg-raised px-3 py-2 text-sm text-fg outline-none placeholder:text-subtle focus:border-accent",
        className,
      )}
      {...props}
    />
  );
}

export function Badge({
  children,
  tone = "muted",
  className,
}: {
  children: ReactNode;
  tone?: "muted" | "accent" | "ok" | "warn" | "danger";
  className?: string;
}) {
  const map = {
    muted: "bg-raised text-muted",
    accent: "bg-accent/15 text-accent",
    ok: "bg-ok/15 text-ok",
    warn: "bg-warn/15 text-warn",
    danger: "bg-danger/15 text-danger",
  }[tone];
  return (
    <span className={cn("inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium", map, className)}>
      {children}
    </span>
  );
}
