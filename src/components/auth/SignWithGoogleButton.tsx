"use client"

import { signIn } from "next-auth/react"

export default function SignWithGoogleButton() {
  return (
    <button className="border p-2" onClick={() => signIn('google', {
      callbackUrl: `${window.location.origin}/`
    })}>Login with Google</button>
  )
}
