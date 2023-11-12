import axios from "axios"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"


export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? ""
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID??"",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET??""
        })
    ]
    ,
    callbacks:{
        async signIn({ user, account, profile, email, credentials }:any) {
            axios.post("http://localhost:3001/users/register",{
                name: user.name,
                email: user.email,
                image: user.image,
                userId: user.id,
                username: user.name +"_"+ Math.floor(Math.random() * 100),
            })
            return true
        },    
    }
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }