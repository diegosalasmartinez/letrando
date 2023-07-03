import LetterBox from './LetterBox'

interface WordLineProps {
  word: string
  currentWord: boolean
  validate: boolean
  wordExists: boolean
  answer: string
}

export default function WordLine({ word, currentWord, validate, wordExists, answer }: WordLineProps) {
  const letters = word.split('').concat(Array(5 - word.length).fill(''))

  return (
    <div className='grid grid-cols-5 gap-1.5'>
      {letters.map((letter, index) => (
        <LetterBox
          key={index}
          letter={letter}
          isCorrect={letter === answer.charAt(index)}
          wrongPosition={answer.includes(letter) && letter !== answer.charAt(index)}
          wordExists={wordExists}
          currentWord={currentWord}
          currentLetter={currentWord && index === word.length}
          validate={validate}
        />
      ))}
    </div>
  )
}
