import { LucideProps, icons } from 'lucide-react'

import React from 'react'
import { LucideIconName } from './types/LucideIconName'

interface LucideIconProps extends LucideProps {
  name: LucideIconName
}

export const LucideIcon = ({
  name,
  ...props
}: LucideIconProps): JSX.Element => {
  const convertToIconKey = (name: LucideIconName): keyof typeof icons => {
    if (name in icons) {
      return name as keyof typeof icons
    }

    const pascalCaseName = name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') as keyof typeof icons

    return pascalCaseName
  }

  const LucideIcon = icons[convertToIconKey(name)]

  if (!LucideIcon) {
    return <span>Icon not found</span>
  }

  return <LucideIcon size={20} color="white" cursor="pointer" {...props} />
}
