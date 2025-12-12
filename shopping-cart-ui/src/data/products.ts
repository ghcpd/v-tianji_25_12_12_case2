export type Product = {
  id: string
  name: string
  price: number
  image?: string
  description?: string
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Aurora Sneakers',
    price: 89.0,
    description: 'Comfortable and stylish sneakers for daily wear.',
  },
  {
    id: 'p2',
    name: 'Nimbus Hoodie',
    price: 59.0,
    description: 'Soft hoodie, perfect for cool evenings.',
  },
  {
    id: 'p3',
    name: 'Orbit Backpack',
    price: 119.0,
    description: 'Durable backpack with multiple compartments.',
  },
  {
    id: 'p4',
    name: 'Lumen Watch',
    price: 199.0,
    description: 'Minimal, elegant timepiece with leather strap.',
  },
]
