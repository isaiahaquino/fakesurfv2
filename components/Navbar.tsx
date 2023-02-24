"use client"

import Link from "next/link";
import { BiSearch, BiCartAlt, BiMenu, BiX, BiChevronsRight } from "react-icons/bi"
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MobileNav from "./MobileNav";

export default function Navbar() {

  const router = useRouter()
  const cart = useSelector((state) => state.cart)
  const [search, setSearch] = useState('')
  const [mobileNav, setMobileNav] = useState(false)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      console.log(search)
      if (search != '') {
        router.push(`/search/${search}`)
      }
    }
  }

  const handleMobileNav = (input: boolean) => {
    setMobileNav(input)
  }

  return (
    <div className="border-b-[1px] sticky z-10 top-0 w-screen bg-white">
      <div className="flex flex-row py-4 sm:py-8 max-w-[1200px] mx-auto justify-between">
        <div className="px-4  text-3xl sm:text-6xl font-bold">
          <Link href="/">
            FakeSurf
          </Link>
        </div>

        <form className="border-slate-200 border-2 flex flex-row flex-1 items-center px-3 gap-1 mx-4 hidden md:flex">
          <button type="button" onClick={() => router.push(`/search/${search}`)}>
            <BiSearch size={20} />
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
        
        <div className="flex flex-row">
          <ul className="flex-row items-center hidden sm:flex">
            <li className="px-4 py-1">
              <Link href="/about">
                About
              </Link>
            </li>
            <li className="px-4 py-1">
              <Link href="/shop">
                Shop
              </Link>
            </li>
          </ul> 
          <Link href="/cart" className="flex flex-row items-center px-3 py-1">
                <BiCartAlt  size={25} />
                <p className="hidden sm:block">({cart.length})</p>
          </Link>
          <button
            className="px-3 sm:hidden"
            onClick={() => {setMobileNav(true)}}
          ><BiMenu size={25} /></button>
        </div>
      </div>

      {mobileNav ? <MobileNav closeMobile={() => {setMobileNav(false)}}/> : <></>}
      
    </div>

  )
}