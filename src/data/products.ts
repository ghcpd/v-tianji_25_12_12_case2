import type { Product } from '../lib/cart-context'

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Aurora Headphones',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=60',
    description: 'Premium noise-cancelling headphones with exceptional audio fidelity and comfort.'
  },
  {
    id: 'p2',
    name: 'Nebula Smartwatch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1516728778615-2d590ea1856f?auto=format&fit=crop&w=800&q=60',
    description: 'Sleek smartwatch with fitness tracking, notifications, and long battery life.'
  },
  {
    id: 'p3',
    name: 'Lumen Lamp',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=60',
    description: 'Minimalist desk lamp with adjustable brightness and color temperature.'
  },
  {
    id: 'p4',
    name: 'Flux Speaker',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1512448247879-29392a9f07ea?auto=format&fit=crop&w=800&q=60',
    description: 'Portable Bluetooth speaker with deep bass and 12-hour battery life.'
  },
]
