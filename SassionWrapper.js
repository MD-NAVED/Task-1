"use client"
import { SessionProvider } from "next-auth/react"

export default function SassionWrapper({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}