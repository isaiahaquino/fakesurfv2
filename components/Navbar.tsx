import Link from "next/link";
import { BiSearch } from "react-icons/bi"

export default function Navbar() {
  return (
    <div className="w-screen flex flex-row border-slate-200 border-b-2">
      <div className="px-5 text-2xl">
        <Link href="/">
          FakeSurf
        </Link>
      </div>

      <div className="border-slate-200 border-x-2 flex flex-row flex-1 items-center px-3">
        <BiSearch />
        <h1 className="text-gray-500 px-1 text-sm">Search</h1>
      </div>
      
      <div className="flex align-middle">
        <ul className="flex flex-row divide-slate-200 divide-x-2 items-center">
          <li className="px-2 py-1">
            <Link href="">
              About
            </Link>
          </li>
          <li className="px-2 py-1">
            <Link href="">
              Shop
            </Link>
          </li>
          <li className="px-2 py-1">
            <Link href="">
              Cart (0)
            </Link>
          </li>
        </ul> 
      </div>
    </div>
  )
}