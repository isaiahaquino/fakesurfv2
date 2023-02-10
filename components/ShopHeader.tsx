import { usePathname } from "next/navigation"

export default function ShopHeader({category}) {

  const pathname = usePathname()
  console.log(pathname)

  return (
    <div className="w-full my-4">
      <h2 className="my-4">Home / Shop {category !== "Shop" ? ` / ${category}` : ""}</h2>
      <h1 className="my-4 text-4xl">{category}</h1>
    </div>
  )
}