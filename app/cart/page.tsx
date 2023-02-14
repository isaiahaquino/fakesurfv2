"use client"

import { useSelector, useDispatch } from "react-redux"
import Image from "next/image"

export default function Cart() {

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div>
      {cart.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <>
          <div>
            <div>Item</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>
          {cart.map((item) => {
            <div>
              <div>
                <Image src={item.image} height='75' width='50' alt=""></Image>
                <h1>{item.title}</h1>
              </div>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.price * item.quantity}</p>
            </div>
          })}
        </>
      )}
    </div>
  )
}