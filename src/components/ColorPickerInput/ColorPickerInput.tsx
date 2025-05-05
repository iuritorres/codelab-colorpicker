import React from 'react'
import { LucideIcon } from '../LucideIcon/LucideIcon'
import { LucideIconName } from '../LucideIcon/types/LucideIconName'
import { handleEyeDropperClick } from './utils/handleEyeDropperClick'

interface ColorPickerToolsProps {
  icon: LucideIconName
  description: string
  onClick: React.DOMAttributes<HTMLButtonElement>['onClick']
}

interface ColorPickerInputProps {
  value: string
  onChange: (color: string) => void
  onCopyColor: (color: string) => void
}

export const ColorPickerInput = ({
  value,
  onChange,
  onCopyColor,
}: ColorPickerInputProps): JSX.Element => {
  const inputDimensions = {
    width: '100%',
    height: '100px',
  }

  const colorPickerTools: ColorPickerToolsProps[] = [
    {
      icon: 'copy',
      description: 'Copiar cor para área de transferência',
      onClick: () => onCopyColor(value),
    },
    {
      icon: 'pipette',
      description: 'Selecionar uma cor da tela',
      onClick: handleEyeDropperClick,
    },
  ]

  return (
    <div
      style={{
        ...inputDimensions,
        display: 'flex',
        gap: '8px',
      }}
    >
      <input
        type="color"
        value={value}
        style={inputDimensions}
        onCopy={() => onCopyColor(value)}
        onChange={(event) => onChange?.(event.target.value)}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        {colorPickerTools.map((tool) => (
          <button
            key={tool.icon}
            title={tool.description}
            onClick={tool.onClick}
            className="icon-wrapper"
          >
            <LucideIcon name={tool.icon} />
          </button>
        ))}
      </div>
    </div>
  )
}
