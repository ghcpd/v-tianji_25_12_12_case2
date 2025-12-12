import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    name: 'Test Product',
    category: 'Electronics',
    price: 99.99,
    rating: 4.5,
    reviews: 50,
    image: '📱',
    description: 'A test product',
    inStock: true,
  };

  it('renders product information correctly', () => {
    render(
      <ProductCard product={mockProduct} onAddToCart={() => {}} />
    );
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('A test product')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('99.99')).toBeInTheDocument();
  });

  it('displays rating and review count', () => {
    render(
      <ProductCard product={mockProduct} onAddToCart={() => {}} />
    );
    
    expect(screen.getByText(/4.5/)).toBeInTheDocument();
    expect(screen.getByText(/50 reviews/)).toBeInTheDocument();
  });

  it('shows emoji for product image', () => {
    render(
      <ProductCard product={mockProduct} onAddToCart={() => {}} />
    );
    
    const emoji = screen.getByText('📱');
    expect(emoji).toBeInTheDocument();
  });

  it('calls onAddToCart when Add button is clicked', () => {
    const onAddToCart = jest.fn();
    render(
      <ProductCard product={mockProduct} onAddToCart={onAddToCart} />
    );
    
    const addButton = screen.getByRole('button', { name: /add test product to cart/i });
    fireEvent.click(addButton);
    
    expect(onAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  it('shows "Added!" message after adding to cart', async () => {
    render(
      <ProductCard product={mockProduct} onAddToCart={() => {}} />
    );
    
    const addButton = screen.getByRole('button', { name: /add test product to cart/i });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Added!')).toBeInTheDocument();
  });

  it('has accessible article role and label', () => {
    render(
      <ProductCard product={mockProduct} onAddToCart={() => {}} />
    );
    
    const article = screen.getByRole('article', { name: /Product: Test Product/i });
    expect(article).toBeInTheDocument();
  });
});
