import PreviewBox from "./PreviewBox"

export default function ProductsGrid({products}) {

  return (
    <div className="flex flex-wrap max-w-[1200px] mx-auto">
      {products.map((product, index) => {
        console.log(product)
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