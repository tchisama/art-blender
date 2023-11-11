import HomePageNaveBar from "@/components/HomePageNaveBar";

import {getServerSession} from 'next-auth/next'

export default async function Home() {
  const session = await getServerSession()
  return (
    <div>
    <HomePageNaveBar  />
    </div>
  )
}
