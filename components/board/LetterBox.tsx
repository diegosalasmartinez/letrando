import { cn } from '@/utils/style'

interface LetterBoxProps {
  letter: string
  isCorrect: boolean
  wrongPosition: boolean
  currentWord: boolean
  currentLetter: boolean
  validate: boolean
}

export default function LetterBox({
  letter,
  isCorrect,
  wrongPosition,
  currentWord,
  currentLetter,
  validate,
}: LetterBoxProps) {
  return (
    <div className='relative'>
      <FrontLetterAnimation
        letter={letter}
        currentWord={currentWord}
        currentLetter={currentLetter}
        validate={validate}
      />
      <BackLetterAnimation
        letter={letter}
        isCorrect={isCorrect}
        wrongPosition={wrongPosition}
        show={validate}
      />
    </div>
  )
}

interface FrontLetterAnimationProps {
  letter: string
  currentWord: boolean
  currentLetter: boolean
  validate: boolean
}

function FrontLetterAnimation({
  letter,
  currentWord,
  currentLetter,
  validate,
}: FrontLetterAnimationProps) {
  return (
    <div
      className={cn(
        'flex aspect-square items-center justify-center rounded-md border-[2px] text-center text-xl font-semibold',
        currentWord ? 'text-gray-600' : 'text-white',
        currentLetter ? 'border-blue-300' : 'border-gray-200',
        validate ? 'animate-flip-front-letter' : 'bg-white',
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div style={{ backfaceVisibility: 'hidden' }}>{letter}</div>
    </div>
  )
}

interface BackLetterAnimationProps {
  letter: string
  isCorrect: boolean
  wrongPosition: boolean
  show: boolean
}

function BackLetterAnimation({ letter, isCorrect, wrongPosition, show }: BackLetterAnimationProps) {
  return (
    <div
      className={cn(
        'absolute left-0 top-0 right-0 bottom-0 flex aspect-square items-center justify-center rounded-md border-[2px] text-center text-xl font-semibold',
        isCorrect ? 'bg-green-600' : wrongPosition ? 'bg-amber-500' : 'bg-gray-500',
        show ? 'text-white animate-flip-back-letter' : 'hidden',
      )}
      style={{ transformStyle: 'preserve-3d', animationDelay: '.3s' }}
    >
      <div style={{ backfaceVisibility: 'hidden' }}>{letter}</div>
    </div>
  )
}
