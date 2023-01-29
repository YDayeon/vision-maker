import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { HiOutlineHome } from 'react-icons/hi';
import { TbCalendar } from 'react-icons/tb';
import { MdOutlineFactCheck } from 'react-icons/md';
import { RxLapTimer } from 'react-icons/rx';
import Link from 'next/link';

export default function NavBar() {
  const [isFold, setIsFold] = useState(false);

  const handleClick = () => {
    setIsFold(!isFold);
  };

  return (
    <nav
      className={`bg-slate-300 h-full px-5 transition-all duration-500 ease-in-out w-52 ${
        isFold && 'bg-slate-600 w-fit'
      }`}
    >
      <CgMenu
        color={isFold ? 'whitesmoke' : ''}
        className='w-7 h-7 mt-4 mb-8'
        onClick={() => setIsFold(!isFold)}
      />
      <div className='flex flex-col gap-5'>
        <div>
          <Link href={'/'} className='flex gap-2'>
            <HiOutlineHome
              color={isFold ? 'whitesmoke' : ''}
              className='w-6 h-6'
            />
            {!isFold && 'Home'}
          </Link>
        </div>
        <div>
          <Link href={'/timer'} className='flex gap-2'>
            <RxLapTimer
              color={isFold ? 'whitesmoke' : ''}
              className='w-6 h-6'
            />
            {!isFold && 'Timer'}
          </Link>
        </div>
        <div>
          <Link href={'/calendar'} className='flex gap-2'>
            <TbCalendar
              color={isFold ? 'whitesmoke' : ''}
              className='w-6 h-6'
            />
            {!isFold && 'Calendar'}
          </Link>
        </div>
        <div>
          <Link href={'/review'} className='flex gap-2'>
            <MdOutlineFactCheck
              color={isFold ? 'whitesmoke' : ''}
              className='w-6 h-6'
            />
            {!isFold && 'Review'}
          </Link>
        </div>
      </div>
    </nav>
  );
}
