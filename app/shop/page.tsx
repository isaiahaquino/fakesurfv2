"use client"

import { useState, useEffect } from "react";
import ProductsGrid from "@/components/ProductsGrid"
import CategoriesBox from "@/components/CategoriesBox";
import ShopHeader from "@/components/ShopHeader";

export default function Shop() {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <h1>Loading</h1>
  if (data == null) return <h1>No data</h1>

  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto px-5 h-full">
      <ShopHeader title={`SHOP`} />

      <div className="w-full flex flex-row my-4 gap-6">
        <CategoriesBox 
          categories={data.categories}
        />

        <ProductsGrid 
          products={data.categories[1].products}
        />
      </div>
    </div>
  )
}