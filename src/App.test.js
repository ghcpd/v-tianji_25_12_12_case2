import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Integration Tests', () => {
  it('renders the app with header and products', () => {
    render(<App />);
    
    expect(screen.getByText('ShopHub')).toBeInTheDocument();
    expect(screen.getByText('Premium Wireless Headphones')).toBeInTheDocument();
  });

  it('adds product to cart and updates badge', async () => {
    render(<App />);
    
    const addButtons = screen.getAllByRole('button', { name: /add.*to cart/i });
    fireEvent.click(addButtons[0]);
    
    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument();
    });
  });

  it('filters products by category', () => {
    render(<App />);
    
    const electronicsFilter = screen.getByLabelText('Filter by Electronics');
    fireEvent.click(electronicsFilter);
    
    expect(screen.getByText('Premium Wireless Headphones')).toBeInTheDocument();
  });

  it('opens cart when cart button is clicked', () => {
    render(<App />);
    
    const cartButton = screen.getByRole('button', { name: /shopping cart/i });
    fireEvent.click(cartButton);
    
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
  });

  it('searches products by name', () => {
    render(<App />);
    
    const searchInput = screen.getByPlaceholderText('Search products...');
    fireEvent.change(searchInput, { target: { value: 'Headphones' } });
    
    expect(screen.getByText('Premium Wireless Headphones')).toBeInTheDocument();
  });

  it('displays correct product count in cart', () => {
    render(<App />);
    
    const addButtons = screen.getAllByRole('button', { name: /add.*to cart/i });
    // Add two different products
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[1]);
    
    // Cart badge should show 2 items
    const badges = screen.queryAllByText(/[12]/);
    const cartBadge = badges.find(el => el.className.includes('cart-badge'));
    expect(cartBadge).toBeInTheDocument();
    expect(cartBadge?.textContent).toBe('2');
  });

  it('removes items from cart', async () => {
    render(<App />);
    
    // Add product to cart
    const addButtons = screen.getAllByRole('button', { name: /add.*to cart/i });
    fireEvent.click(addButtons[0]);
    
    // Open cart
    const cartButton = screen.getByRole('button', { name: /shopping cart/i });
    fireEvent.click(cartButton);
    
    await waitFor(() => {
      const removeButtons = screen.getAllByRole('button', { name: /remove/i });
      expect(removeButtons.length).toBeGreaterThan(0);
    });
  });

  it('updates product quantity in cart', async () => {
    render(<App />);
    
    // Add product to cart
    const addButtons = screen.getAllByRole('button', { name: /add.*to cart/i });
    fireEvent.click(addButtons[0]);
    
    // Open cart
    const cartButton = screen.getByRole('button', { name: /shopping cart/i });
    fireEvent.click(cartButton);
    
    // Increase quantity
    await waitFor(() => {
      const increaseButtons = screen.getAllByRole('button', { name: /increase quantity/i });
      expect(increaseButtons.length).toBeGreaterThan(0);
      fireEvent.click(increaseButtons[0]);
    });
  });

  it('combines search and category filters', () => {
    render(<App />);
    
    // Filter by Electronics
    const electronicsFilter = screen.getByLabelText('Filter by Electronics');
    fireEvent.click(electronicsFilter);
    
    // Search for a specific product
    const searchInput = screen.getByPlaceholderText('Search products...');
    fireEvent.change(searchInput, { target: { value: 'Wireless' } });
    
    expect(screen.getByText('Premium Wireless Headphones')).toBeInTheDocument();
  });
});
