import { cn } from '@/utils/style'

interface KeyboardButtonProps {
  handleKeyPress: (letter: string) => void
}

export function BackSpace({ handleKeyPress }: KeyboardButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    handleKeyPress('Backspace')
  }

  return (
    <button
      className={cn(
        'flex aspect-square w-full items-center justify-center rounded-md text-center font-medium text-gray-500',
        'border-[1px] lg:border-[2px] text-xs md:text-sm lg:text-lg',
        'border-gray-200 bg-white hover:bg-gray-300 hover:border-gray-300',
      )}
      onClick={handleClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        // eslint-disable-next-line tailwindcss/classnames-order
        className={cn('w-4 h-4 lg:w-6 lg:h-6')}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z'
        />
      </svg>
    </button>
  )
}

export function Enter({ handleKeyPress }: KeyboardButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    handleKeyPress('Enter')
  }

  return (
    <button
      className={cn(
        'col-span-2 flex flex-grow w-full items-center justify-center rounded-md text-center font-medium text-gray-500',
        'border-[1px] lg:border-[2px] text-xs md:text-sm lg:text-lg',
        'border-gray-200 bg-white hover:bg-gray-300 hover:border-gray-300',
      )}
      onClick={handleClick}
    >
      Enviar
    </button>
  )
}
