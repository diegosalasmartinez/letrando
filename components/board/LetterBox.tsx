import { cn } from '@/utils/style'

interface LetterBoxProps {
  letter: string
  isCorrect: boolean
  wrongPosition: boolean
  currentWord: boolean
  currentLetter: boolean
  validate: boolean
}

export default function LetterBox({ letter, isCorrect, wrongPosition, currentWord, currentLetter, validate }: LetterBoxProps) {

  return (
    <div
      className={cn(
        'flex aspect-square items-center justify-center rounded-md border-[2px] text-center text-xl font-semibold',
        currentWord ? 'text-gray-600' : 'text-white',
        currentLetter ? 'border-blue-300' : 'border-gray-200',
      !validate ? 'bg-white' : isCorrect ? 'bg-green-600' : wrongPosition ? 'bg-amber-500' : 'bg-gray-500',
      )}
    >
      {letter}
    </div>
  )
}
