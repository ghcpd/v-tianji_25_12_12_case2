import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from './ProductList';

describe('ProductList Component', () => {
  const mockProducts = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Electronics',
      price: 99.99,
      rating: 4.5,
      reviews: 50,
      image: '📱',
      description: 'Test product 1',
      inStock: true,
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Fashion',
      price: 49.99,
      rating: 4.2,
      reviews: 30,
      image: '👕',
      description: 'Test product 2',
      inStock: true,
    },
  ];

  it('renders all products', () => {
    render(
      <ProductList products={mockProducts} onAddToCart={() => {}} />
    );
    
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('shows empty state when no products are provided', () => {
    render(
      <ProductList products={[]} onAddToCart={() => {}} />
    );
    
    expect(screen.getByText('No products found')).toBeInTheDocument();
  });

  it('calls onAddToCart for each product card', () => {
    const onAddToCart = jest.fn();
    render(
      <ProductList products={mockProducts} onAddToCart={onAddToCart} />
    );
    
    const addButtons = screen.getAllByRole('button', { name: /add/i });
    fireEvent.click(addButtons[0]);
    
    expect(onAddToCart).toHaveBeenCalledWith(mockProducts[0]);
  });

  it('renders correct number of product articles', () => {
    render(
      <ProductList products={mockProducts} onAddToCart={() => {}} />
    );
    
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(mockProducts.length);
  });

  it('shows empty state message with helpful text', () => {
    render(
      <ProductList products={[]} onAddToCart={() => {}} />
    );
    
    expect(screen.getByText(/try adjusting your search/i)).toBeInTheDocument();
  });
});
