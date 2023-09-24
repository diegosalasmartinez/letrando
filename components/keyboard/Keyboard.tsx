import { BackSpace, Enter } from './Buttons'
import KeyboardButton from './KeyboardButton'

const firstLine = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const secondLine = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ']
const thirdLine = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

interface KeyboardProps {
  invalidLetters: string[]
  correctLetters: string[]
  handleKeyPress: (letter: string) => void
}

export default function Keyboard({ invalidLetters, correctLetters, handleKeyPress }: KeyboardProps) {
  return (
    <div className='flex flex-col justify-center gap-1 font-mono lg:gap-1.5'>
      <div className='grid w-full grid-cols-10 gap-1 lg:gap-1.5'>
        {firstLine.map((letter, index) => (
          <KeyboardButton
            key={index}
            letter={letter}
            invalidLetters={invalidLetters}
            correctLetters={correctLetters}
            handleKeyPress={handleKeyPress}
          />
        ))}
      </div>
      <div className='grid w-full grid-cols-10 gap-1 lg:gap-1.5'>
        {secondLine.map((letter, index) => (
          <KeyboardButton
            key={index}
            letter={letter}
            invalidLetters={invalidLetters}
            correctLetters={correctLetters}
            handleKeyPress={handleKeyPress}
          />
        ))}
      </div>
      <div className='grid w-full grid-cols-10 gap-1 lg:gap-1.5'>
        <Enter handleKeyPress={handleKeyPress} />
        {thirdLine.map((letter, index) => (
          <KeyboardButton
            key={index}
            letter={letter}
            invalidLetters={invalidLetters}
            correctLetters={correctLetters}
            handleKeyPress={handleKeyPress}
          />
        ))}
        <BackSpace handleKeyPress={handleKeyPress} />
      </div>
    </div>
  )
}
