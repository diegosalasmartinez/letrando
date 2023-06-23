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
  }, [win])

  return (
    <div className='mt-8 text-center'>
      {win ? (
        <div className='text-2xl font-bold text-green-600'>Felicidades </div>
      ) : (
        <>
          <div className='text-2xl font-bold text-red-600'>Fin del juego</div>
          <p>La palabra era {answer}</p>
        </>
      )}
      <button
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className='focus:ring-opacity/50 focus:ring-blue/600 mt-4 rounded-md bg-blue-600 px-4 py-2 text-white shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2'
        onClick={resetGame}
      >
        Volver a jugar
      </button>
    </div>
  )
}
