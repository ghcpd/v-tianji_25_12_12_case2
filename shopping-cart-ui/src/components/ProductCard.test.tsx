import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductCard from './ProductCard'
import { products } from '../data/products'

it('renders product and calls onAdd', async () => {
  const onAdd = vi.fn()
  render(<ProductCard product={products[0]} onAdd={onAdd} />)
  expect(screen.getByText(products[0].name)).toBeInTheDocument()
  await userEvent.click(screen.getByRole('button', { name: /add/i }))
  expect(onAdd).toHaveBeenCalledOnce()
})
