import { cn } from "../../lib/util"

const Card = ({ className, ...props }) => (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm",
        className
      )}
      {...props}
    />
  )
  Card.displayName = "Card"
  
  export { Card }