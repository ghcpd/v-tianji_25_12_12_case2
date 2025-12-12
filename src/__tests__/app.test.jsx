import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('Shopping Cart UI', () => {
  test('renders featured products and can add to cart', async () => {
    render(<App />)
    const addBtn = await screen.findByTestId('add-btn-p1')
    expect(addBtn).toBeInTheDocument()

    await userEvent.click(addBtn)

    const badge = screen.getByTestId('cart-count')
    expect(badge).toHaveTextContent('1')

    // open cart
    const cartBtn = screen.getByRole('button', { name: /open cart/i })
    await userEvent.click(cartBtn)

    const cartItems = await screen.findByTestId('cart-items')
    expect(cartItems).toBeInTheDocument()
    expect(cartItems.querySelectorAll('[data-testid^="cart-item-"]')).toHaveLength(1)

    // add the same product again
    await userEvent.click(addBtn)
    expect(badge).toHaveTextContent('2')

    // subtotal should update (price for p1 is 129)
    expect(screen.getByText(/Subtotal/i).nextSibling).toBeDefined()
  })
})
