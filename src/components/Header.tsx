import React from 'react'

interface HeaderProps {
  title: string
  icon?: React.ReactNode
}

export const Header = ({ title, icon }: HeaderProps): JSX.Element => {
  return (
    <header>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>{title}</h1>
        {icon}
      </div>

      <hr
        className="mt-2 mb-4 border-white"
        style={{
          marginTop: '4px',
          marginBottom: '8px',
          borderColor: 'white',
        }}
      />
    </header>
  )
}
