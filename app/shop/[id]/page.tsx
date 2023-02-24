"use client"

import ShopHeader from '@/components/ShopHeader';
import { useEffect, useState } from 'react';
import ProductsGrid from '@/components/ProductsGrid'
import { TApiSingleCategoryWithProductResp } from '@/types';

export default function SingleCategory(props:any) {

  const [data, setData] = useState<TApiSingleCategoryWithProductResp | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    fetch(`/api/categories/${props.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <h1>Loading</h1>
  if (data == null) return <h1>No data</h1>
  console.log(data)

  return (
    <div className="flex flex-col items-center w-full mx-auto h-full">
      <ShopHeader title={`${data.category.name}`} />

      <div className="bg-slate-50 w-full py-10">
        <ProductsGrid 
          products={data.category.products}
        />
      </div>
      
    </div>
  )
}