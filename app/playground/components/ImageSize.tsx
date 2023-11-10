import usePromptStore from '@/store/promptStore'
import { Button, Slider } from '@nextui-org/react'
import React from 'react'

type Props = {}

const ImageSize = (props: Props) => {
    const { size , setSize } = usePromptStore()
    const sizes = ['256x256', '512x512', '1024x1024']
  return (
    <div className='grid grid-cols-2 gap-1'>
        {
            sizes.map((s,i)=>(
                <Button variant={size==s?'solid':'bordered'} key={i} onClick={()=>{setSize(s)}} className='w-full'>{s}</Button>
            ))
        }
    </div>
  )
}

export default ImageSize