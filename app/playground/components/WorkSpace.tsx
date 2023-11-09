import { Button, Textarea } from '@nextui-org/react'
import React from 'react'

type Props = {}

function WorkSpace({}: Props) {
  return (
    <div className='p-4 flex-1'>
        <h2 className='text-xl'>AI Image Generation</h2>
        <div className='flex mt-4 gap-2'>
        <Textarea
            label="Prompt"
            placeholder="type your prompt .."
            className="flex-1"
        />
        <Button size='lg' color='primary' className=''>Generate</Button>
        </div>
    </div>
  )
}

export default WorkSpace