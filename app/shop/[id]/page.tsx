"use client"

import { useEffect, useState } from 'react';
import ProductsGrid from '../../../components/ProductsGrid'

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

  console.log(data)

  return (
    <div>
      <ProductsGrid 
        products={data.category.products}
      />
    </div>
  )
}