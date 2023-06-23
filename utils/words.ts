export const matchWords = (words: string[]) => {
  const newWords = words.filter(function (w) {
    var regex = /^[a-zA-Z]+$/
    return regex.test(w) && w.length === 5
  })

  return newWords
}
