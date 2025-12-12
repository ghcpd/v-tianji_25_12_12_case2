import React from 'react'
import { renderHook, act } from '@testing-library/react'
import { CartProvider, useCart } from '../lib/cart-context'
import { products } from '../data/products'

function wrapper({ children }: { children?: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>
}

describe('CartContext', () => {
  it('adds items and updates total', () => {
    const { result } = renderHook(() => useCart(), { wrapper })
    act(() => result.current.add(products[0]))
    expect(result.current.items.length).toBe(1)
    expect(result.current.total).toBeCloseTo(products[0].price)

    act(() => result.current.add(products[0]))
    expect(result.current.items[0].qty).toBe(2)
    expect(result.current.total).toBeCloseTo(products[0].price * 2)

    act(() => result.current.increase(products[0].id))
    expect(result.current.items[0].qty).toBe(3)

    act(() => result.current.decrease(products[0].id))
    expect(result.current.items[0].qty).toBe(2)

    act(() => result.current.remove(products[0].id))
    expect(result.current.items.length).toBe(0)

    act(() => result.current.add(products[1]))
    act(() => result.current.clear())
    expect(result.current.items.length).toBe(0)
  })
})
