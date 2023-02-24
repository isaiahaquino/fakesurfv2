export default function ShopHeader(props:any) {
  return (
    <div className="max-w-[1200px] mt-8 mb-6 w-full sm:mx-auto ml-4">
      <h1 className="my-4 text-4xl">{props.title}</h1>
    </div>
  )
}