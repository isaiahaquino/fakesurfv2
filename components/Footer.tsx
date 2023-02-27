import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs"

export default function Footer() {
  return (
    <div className="w-full bg-black">
      <div className="flex flex-wrap justify-center text-white text-sm px-10 md:px-[5rem] pb-6 gap-4 max-w-[1200px] mx-auto">
        <div className="flex-1 text-3xl min-w-[13rem] py-4">
          <h1>FakeSurf</h1>
        </div>

        <div className="flex-2 max-w-[25rem] pr-2 py-4">
          <ul className="flex flex-wrap">
            <li className="w-40 py-1">
              <Link href='/shop'>Shop</Link>
            </li>
            <li className="w-40 py-1">
              <Link href='/about'>About</Link>
            </li>
            <li className="w-40 py-1">
              <Link href=''>Lookbook</Link>
            </li>
            <li className="w-40 py-1">
              <Link href=''>Privacy Policy</Link>
            </li>
            <li className="w-40 py-1">
              <Link href=''>Legal</Link>
            </li>
            <li className="w-40 py-1">
              <Link href=''>Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[13rem] py-4">
          <h1 className="">Subscribe to our newsletter</h1>
          <input className="bg-black border-b-2 border-slate-200 my-2" type="email" placeholder="Your Email"/>
        </div>

        <div className="flex-[.75] min-w-[8rem] py-4">
          <h1 className="">Social Media</h1>
          <ul className="flex flex-row gap-2 py-2">
            <li>
              <Link href=""><BsInstagram /></Link>
            </li>
            <li>
              <Link href=""><BsFacebook /></Link>
            </li>
            <li>
              <Link href=""><BsTwitter /></Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center text-slate-300 bg-black text-sm py-1">
        <p>Created by Isaiah Aquino &copy; 2023 | Design inspired by <Link className="underline" href='https://clairemontsurf.com/'>Clairmont Surf</Link></p>
      </div>
    </div>
  )
}