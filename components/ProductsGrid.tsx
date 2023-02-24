import PreviewBox from "./PreviewBox"
import { TMultipleProducts } from "@/types"


export default function ProductsGrid(props:any) {

  const products:TMultipleProducts = props.products

  return (
    <div className="flex flex-col sm:flex-row flex-wrap max-w-[1200px] mx-auto">
      {products.map((product, index:number) => {
        return (
          <div key={index}>
            <PreviewBox 
              product={product}
            />
          </div>
        )
      })}
    </div>
  )

}