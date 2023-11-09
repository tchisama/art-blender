import { Slider } from '@nextui-org/react'
import React from 'react'

type Props = {}

const ImageSize = (props: Props) => {
  return (
    <div>
    <Slider
        size="md"
        step={128}
        color="secondary"
        label="Width"
        showSteps={true} 
        maxValue={1024} 
        minValue={0} 
        defaultValue={500}
        className="max-w-md" 
      />
    <Slider
        size="md"
        step={128}
        color="secondary"
        label="Height"
        showSteps={true} 
        maxValue={1024} 
        minValue={0} 
        defaultValue={500}
        className="max-w-md" 
      />
    </div>
  )
}

export default ImageSize