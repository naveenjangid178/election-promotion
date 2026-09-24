import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-2xl border border-ink/10 bg-sand-dark/40 p-6", className)}
    {...props}
  />
))
Card.displayName = "Card"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-display text-xl font-medium", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mt-2 text-sm leading-relaxed text-ink/70", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

export { Card, CardTitle, CardDescription }
