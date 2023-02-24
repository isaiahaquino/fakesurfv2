"use client"

import { closeQuick } from "@/redux/quickSlice"
import { useDispatch, useSelector } from "react-redux"
import Image from "next/image"
import { BiX } from "react-icons/bi"

export default function QuickView() {

  const quick = useSelector((state) => state.quick)
  const dispatch = useDispatch()
  const item = quick[0]

  if (quick.length === 0) return 
  console.log(item)

  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-10 border-2 
    border-slate-300 w-[50%] h-[50%] flex items-start justify-between">

      <div className="flex gap-5">
        <Image src='https://placeimg.com/480/480/tech' height='300' width='300' alt=''></Image>
        <div className="flex flex-col">
          <h1 className="text-4xl">{item.title}</h1>
          <p>${item.price}</p>
        </div>
      </div>

      <button type="button" onClick={() => dispatch(closeQuick(quick[0]))}><BiX size={50}/></button>
    </div>
  )
}