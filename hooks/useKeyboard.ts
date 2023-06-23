import { useEffect, useState } from 'react'

export const useKeyboard = () => {
  const [availableWords, setAvailableWords] = useState<string[]>([])
  const [answer, setAnswer] = useState<string>('')
  const [words, setWords] = useState<string[]>(['', '', '', '', ''])
  const [index, setIndex] = useState<number>(0)
  const [invalidLetters, setInvalidLetters] = useState<string[]>([])
  const [correctLetters, setCorrectLetters] = useState<string[]>([])
  const [endOfGame, setEndOfGame] = useState<boolean>(false)
  const [win, setWin] = useState<boolean>(false)

  useEffect(() => {
    const availableWords = localStorage.getItem('availableWords')
    if (availableWords) {
      const wordsArray: string[] = JSON.parse(availableWords)
      setAvailableWords(wordsArray.map((w: string) => w.toUpperCase()))
      pickRandomWord()
    }
  }, [])

  const pickRandomWord = () => {
    const answerNumber = Math.floor(Math.random() * availableWords.length) + 1
    const finalAnswer = availableWords[answerNumber].toUpperCase()
    setAnswer(finalAnswer)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onKeyDown = (e: KeyboardEvent) => {
    if (index >= 5) {
      return
    } else if (e.key === 'Backspace') {
      removeLetter()
    } else if (e.key === 'Enter') {
      submitWord()
    } else if (checkIfIsLetter(e.key)) {
      addLetter(e.key.toUpperCase())
    }
  }

  const onLetterClick = (letter: string) => {
    if (index >= 5) {
      return
    } else if (letter === 'Backspace') {
      removeLetter()
    } else if (letter === 'Enter') {
      submitWord()
    } else if (checkIfIsLetter(letter)) {
      addLetter(letter.toUpperCase())
    }
  }

  const addLetter = (letter: string) => {
    const length = words[index].length
    if (length >= 5) return

    const newWords = words.map((w, i) => {
      if (i === index) {
        return w + letter
      }
      return w
    })

    setWords(newWords)
  }

  const removeLetter = () => {
    const length = words[index].length
    if (length <= 0) return

    const newWords = words.map((w, i) => {
      if (i === index) {
        return w.slice(0, -1)
      }
      return w
    })

    setWords(newWords)
  }

  const submitWord = () => {
    const length = words[index].length
    if (length < 5) return

    const wordExists = availableWords.includes(words[index])
    if (!wordExists) return

    setIndex(index + 1)
    if (words[index] === answer) {
      setEndOfGame(true)
      setWin(true)
    } else if (index === 4) {
      setEndOfGame(true)
      setWin(false)
    }

    saveLetters()
  }

  const saveLetters = () => {
    const invalidArray = [...invalidLetters]
    const correctArray = [...correctLetters]

    words[index].split('').forEach((letter) => {
      if (!answer.includes(letter) && invalidArray.indexOf(letter) === -1) {
        invalidArray.push(letter)
      }
      if (answer.includes(letter) && correctLetters.indexOf(letter) === -1) {
        correctArray.push(letter)
      }
    })

    setInvalidLetters(invalidArray)
    setCorrectLetters(correctArray)
  }

  const resetGame = () => {
    setWords(['', '', '', '', ''])
    setIndex(0)
    setInvalidLetters([])
    setCorrectLetters([])
    setEndOfGame(false)
    setWin(false)
    pickRandomWord()
  }

  const checkIfIsLetter = (key: string) => {
    return /^[a-z]$/i.test(key) || /ñ/i.test(key)
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  return { words, index, answer, endOfGame, win, invalidLetters, correctLetters, onLetterClick, resetGame }
}
