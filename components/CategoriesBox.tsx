export default function CategoriesBox({categories}) {

  if (categories == null) return <div></div>

  return (
    <div className="w-[13rem] min-h-[15rem] border-slate-300 border-2 px-4 py-4">
      <h1 className="my-2 text-xl">Shop</h1>
      <hr></hr>
      <ul className="my-2">
        {categories.map(category => {
          return <li className="my-1" key={category.id}>
            <h1>{category.name}</h1>
          </li>
        })}
      </ul>
      
    </div>
  )
}