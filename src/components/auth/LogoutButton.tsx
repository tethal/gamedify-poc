"use client"

import { signOut } from "next-auth/react"

export default function LogoutButton() {
  return (
    <button className="border p-2" onClick={() => signOut({
      callbackUrl: `${window.location.origin}/`
    })}>Logout</button>
  )
}
