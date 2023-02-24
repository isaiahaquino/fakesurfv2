import { BiX, BiChevronsRight } from "react-icons/bi"
import Link from "next/link"

export default function MobileNav (props:any) {
  return (
    <div>
      <ul className="flex flex-col fixed bg-white w-[20rem] right-0 top-0 text-xl">
        <li className="w-full self-center flex justify-end">
          <button type="button" className="p-4" onClick={props.closeMobile}>
            <BiX size={35} />
          </button>
        </li>
        <li className="w-full py-4">
          <Link href="/about" onClick={props.closeMobile} className="pl-10 pr-4 py-4 flex justify-between">
            About <BiChevronsRight size={30}/>
          </Link>
        </li>
        <li className="w-full py-4">
          <Link href="/shop" onClick={props.closeMobile} className="pl-10 pr-4 py-4 flex justify-between">
            Shop <BiChevronsRight size={30}/>
          </Link>
        </li>
      </ul> 
    </div>
  )
}