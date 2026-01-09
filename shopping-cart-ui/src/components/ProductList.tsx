import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '../data/products'

type Props = {
  products: Product[]
  onAdd: (p: Product) => void
}

export default function ProductList({ products, onAdd }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  )
}
