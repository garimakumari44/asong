"use client"
import { SessionProvider, SessionProviderProps, useSession } from "next-auth/react"

export default function Provider({children, session}: SessionProviderProps) {
    return <SessionProvider session={session}> 
    {children}

    </SessionProvider>
}