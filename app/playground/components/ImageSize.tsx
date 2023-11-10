import { Slider } from '@nextui-org/react'
import React from 'react'

type Props = {}

const ImageSize = (props: Props) => {
  return (
    <div>
    <Slider
        size="lg"
        color="secondary"
        label="Width"
        step={1}
        maxValue={1024} 
        minValue={0} 
        defaultValue={1024}
      />
    <Slider
        size="lg"
        color="secondary"
        step={1}
        label="Height"
        maxValue={1024} 
        minValue={0} 
        defaultValue={1024}
      />
    </div>
  )
}

export default ImageSize