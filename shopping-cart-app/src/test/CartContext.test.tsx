import { describe, it, expect } from 'vitest';
import { cartReducer } from '../context/CartContext';
import type { Product } from '../data/products';

const product: Product = {
  id: 1,
  name: 'Test Product',
  price: 10.99,
  image: 'test.jpg',
  description: 'Test description',
  category: 'Test',
};

describe('cartReducer', () => {
  it('should add item to cart', () => {
    const initialState = { items: [], total: 0 };
    const action = { type: 'ADD_ITEM' as const, payload: product };
    const newState = cartReducer(initialState, action);

    expect(newState.items).toHaveLength(1);
    expect(newState.items[0].id).toBe(1);
    expect(newState.items[0].quantity).toBe(1);
    expect(newState.total).toBe(10.99);
  });

  it('should increase quantity when adding same item', () => {
    const initialState = { items: [{ ...product, quantity: 1 }], total: 10.99 };
    const action = { type: 'ADD_ITEM' as const, payload: product };
    const newState = cartReducer(initialState, action);

    expect(newState.items).toHaveLength(1);
    expect(newState.items[0].quantity).toBe(2);
    expect(newState.total).toBe(21.98);
  });
});