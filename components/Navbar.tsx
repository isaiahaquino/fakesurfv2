"use client"

import Link from "next/link";
import { BiSearch } from "react-icons/bi"
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter()
  const cart = useSelector((state) => state.cart)
  const [search, setSearch] = useState('')

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      console.log(search)
      if (search != '') {
        router.push(`/search/${search}`)
      }
    }
  }

  return (
    <div className="w-screen flex flex-row border-slate-200 border-b-2">
      <div className="px-5 text-2xl">
        <Link href="/">
          FakeSurf
        </Link>
      </div>

      <form className="border-slate-200 border-x-2 flex flex-row flex-1 items-center px-3 gap-1">
        <button type="button" onClick={() => router.push(`/search/${search}`)}>
          <BiSearch />
        </button>

        <input 
          className="w-full focus:outline-0" 
          type="text" 
          placeholder="What are you looking for?"
          onChange={(e) => {setSearch(e.target.value)}}
          value={search}
          onKeyDown={handleKeyDown}
        ></input>
      </form>
      
      <div className="flex align-middle">
        <ul className="flex flex-row divide-slate-200 divide-x-2 items-center">
          <li className="px-2 py-1">
            <Link href="/about">
              About
            </Link>
          </li>
          <li className="px-2 py-1">
            <Link href="/shop">
              Shop
            </Link>
          </li>
          <li className="px-2 py-1">
            <Link href="/cart">
              Cart ({cart.length})
            </Link>
          </li>
        </ul> 
      </div>
    </div>
  )
}