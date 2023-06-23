import { useKeyboard } from '@/hooks/useKeyboard'
import WordLine from './WordLine'
import Keyboard from '../keyboard/Keyboard'
import EndOfGame from './EndOfGame'

export default function BoardWrapper() {
  const {
    words,
    index: currentWord,
    answer,
    invalidLetters,
    correctLetters,
    endOfGame,
    win,
    onLetterClick,
    resetGame,
  } = useKeyboard()

  const handleKeyPress = (letter: string) => {
    onLetterClick(letter)
  }

  return (
    <div>
      <div className='mx-auto mt-4 flex flex-col gap-1.5 xl:w-4/5'>
        {words.map((word, index) => (
          <WordLine
            key={index}
            word={word}
            currentWord={index === currentWord}
            validate={index < currentWord}
            answer={answer}
          />
        ))}
      </div>
      {endOfGame ? (
        <EndOfGame answer={answer} win={win} resetGame={resetGame} />
      ) : (
        <Keyboard
          invalidLetters={invalidLetters}
          correctLetters={correctLetters}
          handleKeyPress={handleKeyPress}
        />
      )}
    </div>
  )
}
