import React from 'react'
import ImageViewer from '@/components/ImageViewer'
import {FiMoreHorizontal} from "react-icons/fi"
import {AiOutlineHeart} from "react-icons/ai"
import {Popover,Listbox, ListboxItem, PopoverTrigger, PopoverContent , Button, Card, CardBody, Image, Input, ScrollShadow, Spinner } from '@nextui-org/react'
import { ImageResult } from '@/types/generatedImages'

type Props = {
  _:ImageResult
}

function CardG({_}: Props) {
  return (
              <Card >
                <CardBody>
                  <div className='flex flex-col relative'>
                    <div className='flex gap-2 absolute right-2 z-20 top-2'>
                      <Button className='' isIconOnly ><AiOutlineHeart/></Button>
                      <More _={_}/>
                    </div>
                    <ImageViewer img={_.results[0]?.url}></ImageViewer>
                    <div className='flex-1 flex flex-col p-4 gap-4'>
                      {/* <h3 className='text-xl'>Revised Prompt</h3> */}
                      <p className='text-sm'>{_.results[0]?.prompt.slice(0,100)} ...</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
  )
}

const More = ({_}:{_:ImageResult})=>{
  const actionHandler = (key:string)=>{
      switch(key){
        case "share":
          break
        case "open":
          break
        case "like":
          break
        case "delete":
          break
      }
  }
  return (
    <Popover placement="bottom" showArrow offset={10}>
    <PopoverTrigger>
            <Button className='' isIconOnly ><FiMoreHorizontal/></Button>
    </PopoverTrigger>
    <PopoverContent className="w-[150px] px-1">
      <Listbox
        aria-label="Actions"
        onAction={(key) => actionHandler(key as string)}
      >
          <ListboxItem key="share">Make a post</ListboxItem>
          <ListboxItem key="open">Open</ListboxItem>
          <ListboxItem key="like">Like</ListboxItem>
          <ListboxItem key="delete" className="text-danger" color="danger">
          Delete
        </ListboxItem>
      </Listbox>
    </PopoverContent>
  </Popover>
  )
}


export default CardG