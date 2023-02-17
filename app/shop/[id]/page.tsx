"use client"

import ShopHeader from '@/components/ShopHeader';
import { useEffect, useState } from 'react';
import ProductsGrid from '@/components/ProductsGrid'

export default function SingleCategory({params}) {

  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    fetch(`/api/categories/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <h1>Loading</h1>
  if (data == null) return <h1>No data</h1>

  return (
    <div className="flex flex-col items-center max-w-[1200px] mx-auto px-5 h-full mb-10">
      <ShopHeader title={`${data.category.name}`} />

      <ProductsGrid 
        products={data.category.products}
      />
    </div>
  )
}