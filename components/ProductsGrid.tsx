import PreviewBox from "./PreviewBox"

export default function ProductsGrid({products}) {

  return (
    <div className="flex flex-col sm:flex-row flex-wrap max-w-[1200px] mx-auto">
      {products.map((product, index) => {
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