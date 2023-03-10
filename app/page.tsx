"use client"

import Image from "next/image"
import bg from "../public/home.jpg"
import ProductsGrid from "@/components/ProductsGrid"
import { useState, useEffect } from "react"
import { TApiAllCategoriesResp, TApiSingleCategoryWithProductResp } from "@/types"

export default function Home() {

  const [feature, setFeature] = useState<TApiAllCategoriesResp | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        setFeature(data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <h1>Loading</h1>
  if (feature == null) return <h1>No data</h1>

  return (
    <div className="h-full">      
      <Image className="object-cover" src={bg} alt="Background" priority={true} />

      <div className="w-full flex flex-col items-center justify-center gap-8 bg-slate-50 py-20">
        <h1 className="text-3xl sm:text-4xl font-bold">FEATURED PRODUCTS</h1>
        {/* <p>{`${JSON.stringify(feature)}`}</p> */}
        <ProductsGrid
          products={feature.categories[1].products} 
        />
      </div>
    </div>
  )
}
