export const validateFileType = (fileType: string): boolean => {
  const validTypes = ['image/png', 'image/jpeg', 'image/svg+xml']

  const isValid = validTypes.includes(fileType)

  console.log(`file type ${fileType} is ${isValid}`)

  return isValid
}
