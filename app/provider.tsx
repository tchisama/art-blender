'use client'
import {NextUIProvider} from '@nextui-org/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'




const queryClient = new QueryClient();


export function Providers({children}: { children: React.ReactNode }) {
  
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </QueryClientProvider>
  )
}