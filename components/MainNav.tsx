import { BsYinYang } from 'react-icons/bs'
import Link from 'next/link'
import Batman from '@/public/BatmanAvatar.png'
import Image from 'next/image'

export default function MainNav() {
  return (
    <div className='fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 pt-8 pb-6 text-sm border-b border-gray-300 bg-gradiant-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
      <div className=''>
        <Link href='/' className='flex items-center space-x-2'>
          <BsYinYang className='' />
          <span className='font-bold sm:inline'>Flow State Swim</span>
        </Link>
      </div>
      <nav className='hidden gap-6 text-white md:flex'>
        <Link href='/about'>About Me</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/posts'>Bulletin Board</Link>
        <Link href='/documentation'>Documentation</Link>
      </nav>
      <div className='cursor-pointer dropdown dropdown-end'>
        <Image
          src={Batman}
          alt='Profile Picture'
          width={40}
          height={40}
          className='bg-gray-400 rounded-full'
        />
      </div>
    </div>
  )
}
