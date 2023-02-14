import Image from "next/image"
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/cartSlice"

export default function PreviewBox({product}) {

  const dispatch = useDispatch();

  return (
    <div className="mx-2">
      <Image src='https://placeimg.com/480/480/tech' alt="" width={250} height={300} priority={true}></Image>
      <h1 className="font-bold mt-1">{product.title}</h1>
      <h2>${product.price}</h2>
      <button 
        className='w-full border-2 border-black py-2 my-2 hover:text-white hover:bg-black' 
        type='button'
        onClick={() => dispatch(addToCart(product))}
      >
        ADD TO CART
      </button>
    </div>  
  )
}

