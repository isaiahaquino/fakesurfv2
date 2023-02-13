"use client"

import { usePathname } from "next/navigation"

export default function ShopHeader() {

  const pathname = usePathname()
  const category = pathname?.substring(pathname?.lastIndexOf('/') + 1)

  return (
    <div className="w-full my-4">
      <h2 className="my-4">Home{pathname}</h2>
      <h1 className="my-4 text-4xl">{category}</h1>
    </div>
  )
}