import Link from "next/link"

export default function CategoriesBox({categories}) {

  if (categories == null) return <div></div>

  return (
    <div className="flex-shrink-0 w-[13rem] h-full border-slate-300 border-[1px] px-4 py-4 bg-white">
      <h1 className="my-2 text-xl">Shop</h1>
      <hr></hr>
      <ul className="my-2">
        {categories.map(category => {
          return <li className="my-1" key={category.id}>
            <Link 
              className="hover:text-slate-500" 
              href={`/shop/${category.id}`}
            >{category.name}</Link>
          </li>
        })}
      </ul>
      
    </div>
  )
}