import React from 'react'
import Sidebar from './components/Sidebar'
import WorkSpace from './components/WorkSpace'
import {getServerSession} from 'next-auth/next'
import { redirect } from 'next/navigation'

type Props = {}

async function page({}: Props) {
  const session = await getServerSession()
  if(!session || !session.user) {
    redirect("/api/auth/signin")
  }
  return (
    <div className='flex flex-1 relative min-w-screen'>
        <Sidebar/>
        <WorkSpace/>
    </div>
  )
}

export default page