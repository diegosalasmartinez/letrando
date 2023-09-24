import { cn } from '@/utils/style'
import JSConfetti from 'js-confetti'
import { useEffect } from 'react'

interface EndOfGameProps {
  answer: string
  win: boolean
  resetGame: () => void
}

export default function EndOfGame({ answer, win, resetGame }: EndOfGameProps) {
  const jsConfetti = new JSConfetti()

  useEffect(() => {
    if (win) {
      jsConfetti.addConfetti()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [win])

  return (
    <div className='text-center'>
      {win ? (
        <div className='font-mono text-3xl font-bold text-green-600'>FELICIDADES </div>
      ) : (
        <>
          <div className='mb-1 font-mono text-3xl font-black text-red-600'>FIN DEL JUEGO</div>
          <p className='mb-2 font-mono text-base'>
            La palabra era <span className='font-bold'>{answer}</span>
          </p>
        </>
      )}
      <button
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className={cn(
          'focus:ring-opacity/50 focus:ring-blue/600 mt-4 rounded-md px-4 py-2 font-mono text-base text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2',
          win ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700',
        )}
        onClick={resetGame}
      >
        Volver a jugar
      </button>
    </div>
  )
}
