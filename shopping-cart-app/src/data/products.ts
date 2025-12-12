export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "High-quality wireless headphones with noise cancellation.",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Feature-packed smart watch with health tracking.",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description: "Comfortable running shoes for all terrains.",
    category: "Sports",
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
    description: "Automatic coffee maker for perfect brews.",
    category: "Home",
  },
  {
    id: 5,
    name: "Yoga Mat",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    description: "Non-slip yoga mat for comfortable practice.",
    category: "Sports",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Portable Bluetooth speaker with great sound.",
    category: "Electronics",
  },
  {
    id: 7,
    name: "Leather Wallet",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    description: "Genuine leather wallet with multiple compartments.",
    category: "Accessories",
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    description: "Adjustable desk lamp with LED lighting.",
    category: "Home",
  },
];