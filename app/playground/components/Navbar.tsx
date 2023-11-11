import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-[300px] bg-background border-r flex flex-col p-4 gap-2'>
        <h1 className='text-2xl drop-shadow-md font-bold'>ArtBlender</h1>
    </div>
  )
}

export default Navbar