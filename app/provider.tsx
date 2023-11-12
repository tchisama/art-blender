'use client'
import useUserStore from '@/store/userStore';
import {NextUIProvider} from '@nextui-org/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import {useEffect} from "react"
import {signIn,signOut,useSession} from 'next-auth/react'
import axios from 'axios';



const queryClient = new QueryClient();


export function Providers({children}: { children: React.ReactNode }) {
  const {user,setUser} = useUserStore();
  const {data:session} = useSession()

  useEffect(()=>{
    if(session && session.user){ 
      axios.post("http://localhost:3001/users/get-user-by-email",{
        email: session.user.email
      }).then((res)=>{
        if(res.data.user !== false){
          setUser(res.data.user)
          console.log(res.data.user)
        }
      })
    }
  },[session,setUser])

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </QueryClientProvider>
  )
}