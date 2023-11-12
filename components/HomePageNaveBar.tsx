import React from 'react'
import AuthButton from './AuthButton'
import Link from 'next/link'
import { Button } from '@nextui-org/react'

type Props = {}

const HomePageNaveBar = (props: Props) => {
  return (
    <div>
        <AuthButton/>
        <Link href={"/playground/create"}>
            <Button>Playground</Button>
        </Link>
    </div>
  )
}


export default HomePageNaveBar