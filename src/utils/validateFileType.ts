export const validateFileType = (fileType: string): boolean => {
  const validTypes = ['image/png', 'image/jpeg', 'image/svg+xml']

  const isValid = validTypes.includes(fileType)

  return isValid
}
