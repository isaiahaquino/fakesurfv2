"use client"

import { useSelector, useDispatch } from "react-redux"
import Image from "next/image"
import { decrementQuantity, incrementQuantity, removeFromCart } from "@/redux/cartSlice"
import { IoCloseSharp, IoArrowDownSharp, IoArrowUpSharp } from "react-icons/io5"
import ShopHeader from "@/components/ShopHeader"
import currency from "currency.js"
import { TSingleProduct } from "@/types"

export default function Cart() {

  const cart = useSelector((state:any) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    const total = cart.reduce((accumulator: number, item:TSingleProduct) => accumulator + item.quantity * parseInt(item.price), 0)
    return currency(total, { precision: 2 })
  }

  const getTax = () => {
    const tax = getTotalPrice().multiply(0.0775)
    return currency(tax, { precision: 2 })
  }

  const getGrandPrice = () => {
    const grand = getTax().add(getTotalPrice())
    return currency(grand, { precision: 2 })
  }

  return (
    <div className="px-5 w-screen max-w-[1200px] mx-auto">
      <ShopHeader title={`YOUR CART (${cart.length})`} />

      {cart.length === 0 ? (
        <h1 className="text-2xl">Your cart is empty</h1>
      ) : (
        <div className="flex flex-col">
          <table className="table-auto min-w-full text-center">
            <thead className="">
              <tr className="border-b">
                <th scope="col" className="px-6 py-4 text-left">Item</th>
                <th scope="col" className="px-6 py-4">Price</th>
                <th scope="col" className="px-6 py-4">Quantity</th>
                <th scope="col" className="px-6 py-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item:TSingleProduct, index:number) => (
                <tr key={index} className="border-b">
                  <td scope="row" className="flex flex-row items-center gap-4 py-4">
                    <Image className="hidden sm:block" src='https://placeimg.com/480/480/tech' height='75' width='50' alt=""></Image>
                    <h1 className="font-bold">{item.title}</h1>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <div className="flex flex-row items-center justify-center gap-1 sm:gap-2">
                      <button 
                        type="button" 
                        onClick={() => dispatch(decrementQuantity(item))}
                        className="px-2 py-4 border-2 hover:border-slate-300"
                      >
                        <IoArrowDownSharp />
                      </button>
                      <p className=" px-3 sm:px-5 py-3 border-2 border-black">{item.quantity}</p>
                      <button 
                        type="button" 
                        onClick={() => dispatch(incrementQuantity(item))}
                        className="px-2 py-4 border-2 hover:border-slate-300"
                      >
                        <IoArrowUpSharp />
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-row items-center justify-end gap-2 sm:ap-4">
                      <p>${parseInt(item.price) * item.quantity}</p>
                      <button 
                        type="button" 
                        onClick={() => dispatch(removeFromCart(item))}
                        className="p-1 rounded-full bg-slate-100 hover:bg-slate-200"
                      >
                        <IoCloseSharp />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col max-w-md w-full self-end mt-4">
            <div className="py-3 border-b flex flex-row justify-between align-middle">
              <h1>Subtotal:</h1>
              <p>${`${getTotalPrice()}`}</p>
            </div>
            <div className="py-3 border-b flex flex-row justify-between align-middle">
              <h1>Shipping:</h1>
              <p>{}</p>
            </div>
            <div className="py-3 border-b flex flex-row justify-between align-middle">
              <h1>Tax:</h1>
              <p>${`${getTax()}`}</p>
            </div>
            <div className="py-3 flex flex-row justify-between align-middle">
              <h1>Grand total:</h1>
              <p>${`${getGrandPrice()}`}</p>
            </div>
            <button 
              type="button" 
              className="bg-slate-800 text-white px-8 py-3 hover:bg-black self-end mt-2 rounded-sm"
            >
              CHECK OUT
            </button>
          </div>
        </div>
      )}
    </div>
  )
}