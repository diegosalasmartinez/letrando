import { cn } from '@/utils/style'

interface KeyboardButtonProps {
  letter: string
  invalidLetters: string[]
  correctLetters: string[]
  handleKeyPress: (letter: string) => void
}

export default function KeyboardButton({
  letter,
  invalidLetters,
  correctLetters,
  handleKeyPress,
}: KeyboardButtonProps) {
  const isIncorrect = invalidLetters.includes(letter)
  const isCorrect = correctLetters.includes(letter)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    handleKeyPress(letter)
  }

  return (
    <button
      className={cn(
        'flex grow-0 aspect-square w-full items-center justify-center rounded-md text-center font-medium',
        'border-[1px] lg:border-[2px] text-xs md:text-sm lg:text-lg',
        !isIncorrect &&
          !isCorrect &&
          'border-gray-200 bg-white text-gray-500 hover:bg-gray-300 hover:border-gray-300',
        isIncorrect && 'border-gray-500 bg-gray-500 text-white',
        isCorrect && 'border-green-600 bg-green-600 text-white',
      )}
      onClick={handleClick}
    >
      {letter}
    </button>
  )
}
