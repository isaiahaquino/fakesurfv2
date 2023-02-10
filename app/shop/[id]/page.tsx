"use client"

import { useEffect } from 'react';

export default function SingleCategory({params}) {
  
  useEffect(() => {
    fetch(`/api/categories/${params}`)
  })


  return (
    <div>
      <h1>Category</h1>
    </div>
  )
}