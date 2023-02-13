"use client"

import { useState, useEffect } from "react";
import ProductsGrid from "@/components/ProductsGrid"
import CategoriesBox from "@/components/CategoriesBox";

export default function Shop() {

  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [category, setCategory] = useState("Shop")

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
    <div className="w-full flex flex-row my-4 gap-6">
      <CategoriesBox 
        categories={data.categories}
      />

      <ProductsGrid 
        products={data.categories[1].products}
      />
    </div>
  )
}