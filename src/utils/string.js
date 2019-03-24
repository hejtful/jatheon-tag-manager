export const getFirstLetter = str => str.charAt(0)

export const trimNthWord = (str, index) => {
  const words = str.split(' ')
  words[index] = getFirstLetter(words[index])
  return words.join(' ')
}
