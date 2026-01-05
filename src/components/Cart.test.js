import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from './Cart';

describe('Cart Component', () => {
  const mockItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 99.99,
      quantity: 2,
      image: '📱',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      quantity: 1,
      image: '👕',
    },
  ];

  it('does not render when isOpen is false', () => {
    render(
      <Cart
        items={mockItems}
        isOpen={false}
        onClose={() => {}}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
    );
    
    expect(screen.queryByText('Shopping Cart')).not.toBeInTheDocument();
  });

  it('renders cart panel when isOpen is true', () => {
    render(
      <Cart
        items={mockItems}
        isOpen={true}
        onClose={() => {}}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
    );
    
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
  });

  it('displays all cart items', () => {
    render(
      <Cart
        items={mockItems}
        isOpen={true}
        onClose={() => {}}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
    );
    
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('calculates and displays correct totals', () => {
    render(
      <Cart
        items={mockItems}
        isOpen={true}
        onClose={() => {}}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
    );
    
    // Subtotal: (99.99 * 2) + (49.99 * 1) = 249.97
    expect(screen.getByText(/249\.97/)).toBeInTheDocument();
    // Tax: 249.97 * 0.1 = 24.997 (rounds to 25.00)
    expect(screen.getByText(/25\.0[0-9]/)).toBeInTheDocument();
  });

  it('shows empty cart message when no items', () => {
    render(
      <Cart
        items={[]}
        isOpen={true}
        onClose={() => {}}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
    );
    
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <Cart
        items={mockItems}
        isOpen={true}
        onClose={onClose}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
    );
    
    const closeButton = screen.getByRole('button', { name: /close cart/i });
    fireEvent.click(closeButton);
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onUpdateQuantity when quantity buttons are clicked', () => {
    const onUpdateQuantity = jest.fn();
    render(
      <Cart
        items={mockItems}
        isOpen={true}
        onClose={() => {}}
        onUpdateQuantity={onUpdateQuantity}
        onRemoveItem={() => {}}
      />
    );
    
    const increaseButtons = screen.getAllByRole('button', { name: /increase quantity/i });
    fireEvent.click(increaseButtons[0]);
    
    expect(onUpdateQuantity).toHaveBeenCalledWith(1, 3);
  });

  it('calls onRemoveItem when remove button is clicked', () => {
    const onRemoveItem = jest.fn();
    render(
      <Cart
        items={mockItems}
        isOpen={true}
        onClose={() => {}}
        onUpdateQuantity={() => {}}
        onRemoveItem={onRemoveItem}
      />
    );
    
    const removeButtons = screen.getAllByRole('button', { name: /remove/i });
    fireEvent.click(removeButtons[0]);
    
    expect(onRemoveItem).toHaveBeenCalledWith(1);
  });

  it('calls onClose when continue shopping is clicked', () => {
    const onClose = jest.fn();
    render(
      <Cart
        items={[]}
        isOpen={true}
        onClose={onClose}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
    );
    
    const continueButton = screen.getByRole('button', { name: /continue shopping/i });
    fireEvent.click(continueButton);
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
