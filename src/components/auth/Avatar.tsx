import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

export default async function Avatar() {
  const session = await getServerSession(authOptions)
  if (session) {
    return (
      <>
        <span className="mx-8">Hello, {session.user?.name}</span>
        <LogoutButton />
      </>
    )
  } else {
    return (
      <Link className="border p-2 mx-8" href="/login">log in</Link>
    )
  }
}
