import Image from "next/image"

export default function PreviewBox({product}) {

  return (
    <div className="mx-2">
      <Image src='https://placeimg.com/480/480/tech' alt="" width={250} height={300} priority={true}></Image>
      <h1 className="font-bold mt-1">{product.title}</h1>
      <h2>${product.price}</h2>
    </div>  
  )
}

