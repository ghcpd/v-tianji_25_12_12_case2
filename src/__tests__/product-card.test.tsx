import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductCard from '../components/ProductCard'
import { CartProvider, useCart } from '../lib/cart-context'
import { products } from '../data/products'

function CurrentTotal() {
  const { total } = useCart()
  return <div data-testid="total">{total}</div>
}

describe('ProductCard', () => {
  it('adds products to cart and updates total', async () => {
    render(
      <CartProvider>
        <ProductCard product={products[0]} />
        <CurrentTotal />
      </CartProvider>
    )

    const addBtn = screen.getByRole('button', { name: /add/i })
    const total = screen.getByTestId('total')
    expect(total.textContent).toBe('0')

    await userEvent.click(addBtn)
    expect(total.textContent).toBe(products[0].price.toString())
  })
})
