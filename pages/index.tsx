import Head from 'next/head'
import path from 'path'
import { promises as fs } from 'fs'
import Header from '@/components/layout/Header'
import BoardWrapper from '@/components/board/BoardWrapper'
import { useEffect } from 'react'

export default function Home({ words }: { words: string[] }) {
  const dataIsReady = words.length > 0

  useEffect(() => {
    if (words.length > 0) {
      localStorage.setItem('availableWords', JSON.stringify(words))
    }
  }, [words])

  return (
    <div>
      <Head>
        <title>Letrando</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='mx-auto w-11/12 max-w-xl lg:w-4/5'>
        <Header />
        {dataIsReady && <BoardWrapper />}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const jsonDirectory = path.join(process.cwd(), 'data')
  const fileContents = await fs.readFile(jsonDirectory + '/words.json', 'utf8')
  const words = JSON.parse(fileContents)

  return {
    props: {
      words,
    },
  }
}
