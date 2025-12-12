import React from 'react'
import { Product } from '../data/products'

type Props = {
  product: Product
  onAdd: (product: Product) => void
}

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-5 flex flex-col">
      <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center mb-4">
        <div className="text-3xl text-gray-400">🛍️</div>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
        <button
          onClick={() => onAdd(product)}
          className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  )
}
