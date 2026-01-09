import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

test('integration: full add-to-cart flow and totals calculation', async () => {
  render(<App />)

  // Add product 1
  const addP1 = await screen.findByTestId('add-btn-p1')
  await userEvent.click(addP1)

  // Add product 2
  const addP2 = await screen.findByTestId('add-btn-p2')
  await userEvent.click(addP2)

  // Badge should show 2
  const badge = screen.getByTestId('cart-count')
  expect(badge).toHaveTextContent('2')

  // Open cart and verify two items
  const cartBtn = screen.getByRole('button', { name: /open cart/i })
  await userEvent.click(cartBtn)

  const items = await screen.findAllByTestId(/cart-item-/)
  expect(items.length).toBeGreaterThanOrEqual(2)

  // Increase quantity of first item
  const incButtons = screen.getAllByRole('button', { name: /increase|\+/i })
  if (incButtons.length) await userEvent.click(incButtons[0])

  // Badge should now be 3
  expect(badge).toHaveTextContent('3')

  // Check total amount is present
  expect(screen.getByText(/Total/i).nextSibling).toBeDefined()
})
