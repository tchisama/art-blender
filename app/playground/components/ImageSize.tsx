import usePromptStore from '@/store/promptStore'
import { Slider } from '@nextui-org/react'
import React from 'react'

type Props = {}

const ImageSize = (props: Props) => {
    const { width,setWidth,height,setHeight } = usePromptStore()
  return (
    <div>
    <Slider
        size="lg"
        color="secondary"
        label="Width"
        step={1}
        maxValue={1024} 
        minValue={0} 
        defaultValue={width}
        onChange={(v) => setWidth(v as number)}
      />
    <Slider
        size="lg"
        color="secondary"
        step={1}
        label="Height"
        maxValue={1024} 
        minValue={0} 
        defaultValue={height}
        onChange={(v) => setHeight(v as number)}
      />
    </div>
  )
}

export default ImageSize