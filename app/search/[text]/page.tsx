"use client"

import { useEffect, useState } from "react"
import ProductsGrid from '@/components/ProductsGrid'
import ShopHeader from "@/components/ShopHeader"

export default function SearchedProducts({ params }) {
  
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch(`/api/search/${params.text}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <h1>Loading</h1>
  if (data == null) return <h1>No data</h1>

  return (
    <div className="flex flex-col items-center w-full mx-auto h-full mb-10">
      <ShopHeader 
        title={`${data.searchData.length} RESULT FOR '${params.text}'`}
      />

      <div className="bg-slate-50 w-full py-10">
        <ProductsGrid
          products={data.searchData}
        />
      </div>
    
    </div>
  )
}