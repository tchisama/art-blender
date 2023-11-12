"use client"
import { Avatar, Button } from '@nextui-org/react'
import React from 'react'
import { BiPlanet } from 'react-icons/bi'
import { RiMagicFill } from 'react-icons/ri'
import { AiFillHeart } from 'react-icons/ai'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {MdPhotoLibrary} from "react-icons/md"
type Props = {}


const links = [
    {
        name: 'Explore',
        href: '/playground/explore',
        icon: <BiPlanet/>
    },
    {
        name: 'Create',
        href: '/playground/create',
        icon: <RiMagicFill/>
    },
    {
        name: "Liked",
        href: "/playground/liked",
        icon: <AiFillHeart/>
    },
    {
        name: "Gallery",
        href: "/playground/gallery",
        icon: <MdPhotoLibrary/>
    },

]

const Navbar = (props: Props) => {
    const {data:session} = useSession()
    const path = usePathname()
  return (
    <div className='w-[250px] h-screen bg-background border-r flex flex-col p-4 gap-2'>
        <Link href={"/"}>
            <h1 className='text-2xl text-secondary-500  drop-shadow-md font-bold flex gap-2 my-4 items-center'><RiMagicFill/> ArtBlender</h1>
        </Link>
        <div className='flex flex-col gap-2 mt-14 flex-1'>
            {
                links.map((l,i)=>(
                    <Link key={i} href={l.href}>
                    <Button color={"secondary"} variant={path === l.href ? 'solid' : 'light'} size='lg' href={l.href} startContent={l.icon}  className='w-full flex justify-start'>
                        {l.name}
                    </Button>
                    </Link>
                ))
            }
            <Button variant='light' size='lg' startContent={
                <Avatar size='sm' src={session?.user?.image??""}></Avatar>
                }  className='w-full flex mt-auto justify-start'>
                    Profile
            </Button>
        </div>
    </div>
  )
}

export default Navbar