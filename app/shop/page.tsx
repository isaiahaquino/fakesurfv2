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

  if (isLoading) return <div></div>
  if (data == null) return <h1></h1>

  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto">
      <div className="w-full my-4">
        <h2 className="my-4">Home / Shop {category !== "Shop" ? ` / ${category}` : ""}</h2>
        <h1 className="my-4 text-4xl">{category}</h1>
      </div>

      <div className="w-full flex-row items-start my-4">
        <CategoriesBox categories={data.categories} />

        <ProductsGrid />
      </div>
    </div>
  )
}