"use client"
import { Button, Card, CardBody, Divider } from '@nextui-org/react'
import React from 'react'
import { TbDiamondFilled } from 'react-icons/tb'
import ModuleSelect from './ModuleSelect'
import NumbersOfImages from './NumbersOfImages'
type Props = {}

function Sidebar({}: Props) {
  return (
    <div className='w-[300px] bg-foreground-50 shadow-xl h-screen p-4'>
      <h1 className='text-2xl drop-shadow-md font-bold'>ArtBlender</h1>
      <Divider className='my-4'/>
      <Card>
        <CardBody>
          <p>Credits</p>
          <Divider className='my-2'/>
          <div className='flex justify-between items-center'>
              <p className='text-lg flex gap-2 items-center'>140 <TbDiamondFilled/></p>
              <Button variant='shadow' startContent={<TbDiamondFilled/>} color="secondary"> Upgrade</Button>
          </div>

        </CardBody>
      </Card>
      <Divider className='my-4'/>
      <div>
       <p className='text-lg my-2'>Number of images</p>
       <NumbersOfImages/>
       <p className='text-lg my-2'>Modules</p>
       <ModuleSelect/>
      </div>
    </div>
  )
}

export default Sidebar