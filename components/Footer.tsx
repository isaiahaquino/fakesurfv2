import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs"

export default function Footer() {
  return (
    <div>
      <div className="flex flex-row justify-center text-white bg-black text-sm px-8 gap-4">
        <div className="flex-1 text-3xl">
          <h1>FakeSurf</h1>
        </div>

        <div className="flex-2">
          <ul className="flex flex-wrap mr-20">
            <li className="w-40">
              <Link href=''>Shop</Link>
            </li>
            <li className="w-40">
              <Link href=''>About</Link>
            </li>
            <li className="w-40">
              <Link href=''>Lookbook</Link>
            </li>
            <li className="w-40">
              <Link href=''>Privacy Policy</Link>
            </li>
            <li className="w-40">
              <Link href=''>Legal</Link>
            </li>
            <li className="w-40">
              <Link href=''>Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h1>Subscribe to our newsletter</h1>
          <input className="bg-black border-b-2 border-slate-200" type="email" placeholder="Your Email"/>
        </div>

        <div className="flex-1">
          <h1>Social Media</h1>
          <ul className="flex flex-row gap-2">
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
        Created by Isaiah Aquino &copy; 2023
      </div>
    </div>
  )
}