import Image from 'next/image'
import Header from '@/Components/Header'

export default function Home() {
  return (
    <div className='
      bg-neutral-900
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
    '>
      <Header>
        Header
      </Header>
    </div>
  )
}