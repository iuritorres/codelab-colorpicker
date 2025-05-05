import type { icons } from "lucide-react"
import type dynamicIconImports from "lucide-react/dynamicIconImports"

export type LucideIconName =
  | keyof typeof icons
  | keyof typeof dynamicIconImports
