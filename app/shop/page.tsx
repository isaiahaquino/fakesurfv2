"use client"

import { useState, useEffect } from "react";
import ProductsGrid from "@/components/ProductsGrid"
import CategoriesBox from "@/components/CategoriesBox";
import ShopHeader from "@/components/ShopHeader";
import { TApiAllCategoriesResp, TApiSingleCategoryWithProductResp } from "@/types";

export default function Shop() {

  const [data, setData] = useState<TApiAllCategoriesResp | null>(null)
  const [feature, setFeature] = useState<TApiSingleCategoryWithProductResp | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/categories/featured')
      .then((res) => res.json())
      .then((data) => {
        setFeature(data)
        setIsLoading(false)
      })
  }, [])

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
  if (feature == null) return <h1>No data</h1>
  if (data == null) return <h1>no data</h1>

  return (
    <div className="flex flex-col items-center h-full w-full">
      <ShopHeader title={`SHOP`} />

      <div className="w-full h-full bg-slate-50">
        <div className="max-w-[1200px] mx-auto py-10 flex flex-col sm:flex-row gap-6">
          <CategoriesBox 
            categories={data.categories}
          />

          <ProductsGrid 
            products={feature.category.products}
          />
        </div>
      </div>
    </div>
  )
}