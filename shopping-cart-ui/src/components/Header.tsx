import React from 'react'
import clsx from 'clsx'

type Props = {
  cartCount: number
  onOpenCart: () => void
}

export default function Header({ cartCount, onOpenCart }: Props) {
  return (
    <header className="flex items-center justify-between p-6 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-indigo-500 to-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
          SC
        </div>
        <h1 className="text-xl font-semibold">Sleek Cart</h1>
      </div>
      <button
        aria-label="open-cart"
        onClick={onOpenCart}
        className={clsx(
          'relative px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition',
          'flex items-center gap-3'
        )}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3h2l.6 3M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Cart</span>
        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-2">{cartCount}</span>
      </button>
    </header>
  )
}
