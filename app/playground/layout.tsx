import React from 'react'
import Navbar from './components/Navbar'


type Props = {
    children: React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='flex'>
        <Navbar/>
        {
        children
        }
    </div>
  )
}

export default layout