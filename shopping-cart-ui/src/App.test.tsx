import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

it('adds items to cart and updates total', async () => {
  render(<App />)
  expect(screen.getByText(/Featured Products/)).toBeInTheDocument()
  const addButtons = screen.getAllByRole('button', { name: /add/i })
  expect(addButtons.length).toBeGreaterThan(0)
  await userEvent.click(addButtons[0])
  // open cart should have been auto opened
  expect(await screen.findByText(/Your Cart/)).toBeInTheDocument()
  expect(screen.getByText(/Total/)).toBeInTheDocument()
})
