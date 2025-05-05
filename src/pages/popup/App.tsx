import React, { useEffect, useState } from 'react'
import { ColorHistory, ColorPickerInput, PageWrapper } from '../../components'
import { LocalStorageKeys } from '../../constants'
import { copyToClipboard } from '../../utils'

const App = (): JSX.Element => {
  const [color, setColor] = useState('#7b00d3')
  const [colorHistory, setColorHistory] = React.useState<string[]>([])

  const onCopyColor = (color: string) => {
    copyToClipboard(color)

    const colorHistory =
      localStorage.getItem(LocalStorageKeys.COLOR_HISTORY)?.split(';') || []

    const newColorHistory = new Set([color, ...colorHistory])
    const parsedColorHistory = Array.from(newColorHistory)

    localStorage.setItem(
      LocalStorageKeys.COLOR_HISTORY,
      parsedColorHistory.join(';'),
    )
    setColorHistory(parsedColorHistory)
  }

  const onClearHistory = () => {
    localStorage.removeItem(LocalStorageKeys.COLOR_HISTORY)
    setColorHistory([])
  }

  useEffect(() => {
    const storedColorHistory = localStorage.getItem(
      LocalStorageKeys.COLOR_HISTORY,
    )
    const parsedColorHistory = storedColorHistory?.split(';')

    setColorHistory(parsedColorHistory || [])
  }, [])

  return (
    <PageWrapper headerProps={{ title: 'CodeLab - Color Picker' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
          height: '100%',
        }}
      >
        <ColorPickerInput
          value={color}
          onChange={setColor}
          onCopyColor={onCopyColor}
        />
        <ColorHistory
          colorHistory={colorHistory}
          onClearHistory={onClearHistory}
        />
      </div>
    </PageWrapper>
  )
}

export default App
