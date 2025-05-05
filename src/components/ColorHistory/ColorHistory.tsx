import React from 'react'
import { copyToClipboard } from '../../utils'
import { LucideIcon } from '../LucideIcon/LucideIcon'

interface ColorHistoryProps {
  colorHistory: string[]
  onClearHistory: () => void
}

export const ColorHistory = ({
  colorHistory,
  onClearHistory,
}: ColorHistoryProps): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {colorHistory.map((color, index) => (
          <button
            key={index}
            title="Copiar cor para área de transferência"
            onClick={() => copyToClipboard(color)}
            style={{
              backgroundColor: color,
              borderRadius: '4px',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          ></button>
        ))}
      </div>

      <button
        className="icon-wrapper"
        title="Limpar histórico de cores"
        onClick={onClearHistory}
      >
        <LucideIcon name="trash-2" />
      </button>
    </div>
  )
}
