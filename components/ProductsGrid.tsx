import PreviewBox from "./PreviewBox"

export default function Products({products}) {

  return (
    <div className="flex flex flex-wrap">
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