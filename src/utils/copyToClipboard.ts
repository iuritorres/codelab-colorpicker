export const copyToClipboard = async (content: string): Promise<void> => {
  const clipboard = navigator.clipboard

  if (!clipboard) {
    alert('Não foi possível acessar a área de transferência')
    return
  }

  try {
    await clipboard.writeText(content)
    alert(`"${content}" copiada para a área de transferência!`)
  } catch (error) {
    alert(`Erro ao copiar "${content}" para a área de transferência`)
  }
}
