"use client"

import { closeQuick } from "@/redux/quickSlice"
import { useDispatch, useSelector } from "react-redux"
import Image from "next/image"
import { BiX } from "react-icons/bi"
import { addToCart } from "@/redux/cartSlice"

export default function QuickView() {

  const quick = useSelector((state:any) => state.quick)
  const dispatch = useDispatch()
  const item = quick[0]

  console.log(item)

  if (quick.length === 0) return <></>

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black h-screen w-screen z-[100]">
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-30 
        flex items-start justify-between w-[calc(100vw-1rem)] h-fit md:w-[755px]">

        <div className="flex flex-col sm:flex-row mx-auto gap-5 my-5">
          <Image src='https://placeimg.com/480/480/tech' height='300' width='300' alt=''></Image>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">{item.title}</h1>
            <p>${item.price}</p>

            <hr></hr>

            <p>{item.description}</p>

            <button 
              className="bg-slate-800 text-white hover:bg-black rounded-sm text-sm px-[15px] py-[5px] w-[10rem]"
              type='button'
              onClick={() => dispatch(addToCart(item))}
            >
              ADD TO CART
            </button>
          </div>
        </div>

        <button className="p-2" type="button" onClick={() => dispatch(closeQuick(quick[0]))}><BiX size={40}/></button>
      </div>
    </div>
  )
}