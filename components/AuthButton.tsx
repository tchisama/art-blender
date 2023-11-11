"use client"
import React from 'react'
import {signIn,signOut,useSession} from 'next-auth/react'
import { Button } from '@nextui-org/react'


type Props = {}

const AuthButton = (props: Props) => {
    const {data:session} = useSession()

    if(session){
        return (
            <>
            {session?.user?.name} <br />
            <Button variant='bordered' onClick={()=>{signOut()}}>Sign out</Button>
            </>
        )
    }
    return(
        <Button color='secondary' onClick={()=>{signIn()}}>Sign in</Button>
    )

}

export default AuthButton