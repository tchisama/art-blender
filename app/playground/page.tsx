import React from 'react'
import Sidebar from './components/Sidebar'
import WorkSpace from './components/WorkSpace'

type Props = {}

function page({}: Props) {
  return (
    <div className='flex min-w-screen'>
        <Sidebar/>
        <WorkSpace/>
    </div>
  )
}

export default page