import React from 'react'
import { Header } from './Header'

interface PageWrapperProps {
  children?: React.ReactNode
  headerProps: React.ComponentProps<typeof Header>
}

export const PageWrapper = ({
  children,
  headerProps,
}: PageWrapperProps): JSX.Element => {
  return (
    <main
      style={{
        padding: '24px',
        width: '380px',
        minHeight: '600px',
        color: '#ffffff',
        backgroundColor: '#202127',
      }}
    >
      <Header {...headerProps} />
      {children}
    </main>
  )
}
