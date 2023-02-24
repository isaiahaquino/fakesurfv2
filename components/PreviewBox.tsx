import Image from "next/image"
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/cartSlice"
import { openQuick } from "@/redux/quickSlice";

export default function PreviewBox({product}) {
  
  const dispatch = useDispatch();

  return (
    <div className="mx-2 mb-1 bg-white group">
      <div className="border-[1px]">
        <Image 
          src='https://placeimg.com/480/480/tech' 
          alt="" 
          width={250} 
          height={300} 
          priority={true}
          className="m-3"
        ></Image>
        <div className="flex-row justify-center items-center h-[5rem] gap-2 hidden group-hover:flex">
          <button 
            className="bg-white border-[1px] border-black text-black rounded-sm text-sm px-[14px] py-[4px]"
            type='button'
            onClick={() => dispatch(openQuick(product))}
          >
            QUICK VIEW
          </button>
          <button 
            className="bg-slate-800 text-white hover:bg-black rounded-sm text-sm px-[15px] py-[5px]"
            type='button'
            onClick={() => dispatch(addToCart(product))}
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="bg-slate-50 h-[5rem] group-hover:hidden">
        <h1 className="font-bold pt-3">{product.title}</h1>
        <h2>${product.price}</h2>
      </div>
    </div>  
  )
}

