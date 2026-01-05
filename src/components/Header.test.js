import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
  it('renders the logo and title', () => {
    render(
      <Header cartCount={0} onCartClick={() => {}} onSearch={() => {}} />
    );
    
    expect(screen.getByText('ShopHub')).toBeInTheDocument();
  });

  it('displays cart badge with correct count', () => {
    render(
      <Header cartCount={5} onCartClick={() => {}} onSearch={() => {}} />
    );
    
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('does not show cart badge when count is 0', () => {
    render(
      <Header cartCount={0} onCartClick={() => {}} onSearch={() => {}} />
    );
    
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });

  it('calls onCartClick when cart button is clicked', () => {
    const onCartClick = jest.fn();
    render(
      <Header cartCount={0} onCartClick={onCartClick} onSearch={() => {}} />
    );
    
    const cartButton = screen.getByRole('button', { name: /shopping cart/i });
    fireEvent.click(cartButton);
    
    expect(onCartClick).toHaveBeenCalledTimes(1);
  });

  it('calls onSearch with query when search input changes', () => {
    const onSearch = jest.fn();
    render(
      <Header cartCount={0} onCartClick={() => {}} onSearch={onSearch} />
    );
    
    const searchInput = screen.getByPlaceholderText('Search products...');
    fireEvent.change(searchInput, { target: { value: 'headphones' } });
    
    expect(onSearch).toHaveBeenCalledWith('headphones');
  });

  it('has accessible cart button label', () => {
    render(
      <Header cartCount={3} onCartClick={() => {}} onSearch={() => {}} />
    );
    
    const cartButton = screen.getByRole('button', { name: /shopping cart with 3 items/i });
    expect(cartButton).toBeInTheDocument();
  });
});
