"use client"
import usePromptStore from '@/store/promptStore'
import { Button, Slider } from '@nextui-org/react'
import React from 'react'

type Props = {}

const NumbersOfImages = (props: Props) => {

    const {n:NumberOfImages,setN:setNumberOfImages}=usePromptStore()
  return (
       <div className=''>
      <Slider   
        size="lg"
        step={1}
        color="secondary"
        showTooltip={true}
        label="n" 
        showSteps={true} 
        maxValue={6} 
        minValue={1} 
        defaultValue={1}
        className="w-full" 
        value={NumberOfImages}
        onChange={(e)=>setNumberOfImages(e as number)}
      />
        </div> 
  )
}

export default NumbersOfImages