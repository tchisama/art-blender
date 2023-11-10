import usePromptStore from '@/store/promptStore'
import { Select, SelectItem } from '@nextui-org/react'
import React from 'react'

type Props = {}

const DalleV = (props: Props) => {
    const {dallev,setDallev} = usePromptStore()
    const dalles = [
        "dall-e-3",
        "dall-e-2",
    ]
  return (
    <div>
    <Select
        label="choose Dall-E version"
        placeholder="Select an animal"
        variant='bordered'
        value={dallev}
        onChange={e=>setDallev(e.target.value)}
        defaultSelectedKeys={[dallev]}
      >
        {dalles.map((dalle) => (
          <SelectItem key={dalle} value={dalle}>
            {dalle}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}

export default DalleV