"use client"
import ImageViewer from '@/components/ImageViewer'
import useUserStore from '@/store/userStore'
import { ImageResult } from '@/types/generatedImages'
import { Button, Card, CardBody, Image, Input, ScrollShadow, Spinner } from '@nextui-org/react'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {BiSearch}  from "react-icons/bi"
import {FiMoreHorizontal} from "react-icons/fi"
import {AiOutlineHeart} from "react-icons/ai"
import CardG from './components/card'
type Props = {}

const Page = (props: Props) => {
  const [gallery, setGallery] = useState<ImageResult[]>([])
  const {user} = useUserStore()
  const [loading , setLoading] = useState(true)
  const [search,setSearch] = useState("")

  useEffect(()=>{
    if(!user?._id){
      return
    }
    const getLocalGallory = async()=>{
      const g = localStorage.getItem("gallery")
      if(g){
        setGallery(JSON.parse(g))
        setLoading(false)
      }else{
        axios.post<ImageResult[]>("http://localhost:3001/api/getGeneratedImages",{
          userId: user?._id
        }).then((res)=>{
          setGallery(res.data)
          console.log(res.data)
          setLoading(false)
          localStorage.setItem("gallery",JSON.stringify(res.data))
          })   
      }
    }
    getLocalGallory()
  },[user?._id,setGallery])

  return (
    <div className='container h-screen flex flex-col mx-auto'>
      <div className='flex my-4 justify-between items-center'>
        <h1 className='text-4xl my-4 p-4'>Gallery</h1>
        <Input
          type="text"
          placeholder="search .."
          className='max-w-[300px]'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          startContent={
            <BiSearch/>
          }
        />
      </div>
      {
        loading ? (
          <div className='p-4 flex flex-col items-center gap-4 my-12'>
            <p className=' text-secondary-500'>Loading your artwork</p>
            <Spinner size='lg' color="secondary"/>
          </div>
        ):
      <ScrollShadow hideScrollBar className='flex-1 overflow-y-auto'>
      <div className='grid  p-4 grid-cols-3 gap-4 '>
        {
          gallery.filter((g)=>(g.prompt.includes(search)||g.results.some(r=>r.prompt.includes(search)))).map((_,i)=>(
              <CardG key={i} _={_}/>
          ))
        }
      </div>
      </ScrollShadow>
      }
    </div>
  )
}

export default Page