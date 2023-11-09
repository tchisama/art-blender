"use client"
import { Button } from '@nextui-org/react'
import React from 'react'

type Props = {}

const NumbersOfImages = (props: Props) => {

  const [NumberOfImages, setNumberOfImages] = React.useState(1)
  return (
       <div className='grid grid-cols-4 gap-1'>
        {
          new Array(8).fill(0).map((_,i)=>(
            <Button onClick={()=>setNumberOfImages(i+1)} key={i} isIconOnly className='w-full' variant={i+1==NumberOfImages?"solid":'bordered'}>{i+1}</Button>
          ))
        }
        </div> 
  )
}

export default NumbersOfImages