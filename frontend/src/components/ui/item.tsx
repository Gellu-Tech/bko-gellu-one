import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* ─── Item (root) ──────────────────────────────────────── */

const itemVariants = cva(
  "flex items-center gap-4 rounded-lg border px-4 py-3 transition-colors",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-border",
        muted: "bg-muted/50 text-foreground border-border",
        outline: "bg-transparent text-foreground border-border",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-muted/50",
      },
      interactive: {
        true: "cursor-pointer hover:bg-muted/50 active:bg-muted",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      interactive: false,
    },
  }
)

function Item({
  className,
  variant,
  interactive,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemVariants>) {
  return (
    <div
      data-slot="item"
      className={cn(itemVariants({ variant, interactive, className }))}
      {...props}
    />
  )
}

/* ─── ItemIcon ─────────────────────────────────────────── */

function ItemIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-icon"
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
        className
      )}
      {...props}
    />
  )
}

/* ─── ItemContent ──────────────────────────────────────── */

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)}
      {...props}
    />
  )
}

/* ─── ItemTitle ────────────────────────────────────────── */

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={cn("truncate text-sm font-medium leading-none", className)}
      {...props}
    />
  )
}

/* ─── ItemDescription ──────────────────────────────────── */

function ItemDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-description"
      className={cn("truncate text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

/* ─── ItemAction (right-aligned slot) ──────────────────── */

function ItemAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-action"
      className={cn("ml-auto shrink-0", className)}
      {...props}
    />
  )
}

export { Item, itemVariants, ItemIcon, ItemContent, ItemTitle, ItemDescription, ItemAction }
