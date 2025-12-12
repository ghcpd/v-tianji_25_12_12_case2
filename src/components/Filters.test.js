import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filters from './Filters';

describe('Filters Component', () => {
  const mockCategories = [
    'All Products',
    'Electronics',
    'Fashion',
    'Home & Living',
  ];

  it('renders all categories', () => {
    render(
      <Filters
        categories={mockCategories}
        selectedCategory="All Products"
        onCategoryChange={() => {}}
      />
    );
    
    mockCategories.forEach((category) => {
      expect(screen.getByLabelText(`Filter by ${category}`)).toBeInTheDocument();
    });
  });

  it('marks selected category as checked', () => {
    render(
      <Filters
        categories={mockCategories}
        selectedCategory="Electronics"
        onCategoryChange={() => {}}
      />
    );
    
    const electronicsInput = screen.getByLabelText('Filter by Electronics');
    expect(electronicsInput).toBeChecked();
  });

  it('calls onCategoryChange when category is selected', () => {
    const onCategoryChange = jest.fn();
    render(
      <Filters
        categories={mockCategories}
        selectedCategory="All Products"
        onCategoryChange={onCategoryChange}
      />
    );
    
    const electronicsInput = screen.getByLabelText('Filter by Electronics');
    fireEvent.click(electronicsInput);
    
    expect(onCategoryChange).toHaveBeenCalledWith('Electronics');
  });

  it('displays filters title', () => {
    render(
      <Filters
        categories={mockCategories}
        selectedCategory="All Products"
        onCategoryChange={() => {}}
      />
    );
    
    expect(screen.getByText('Categories')).toBeInTheDocument();
  });

  it('has accessible filter inputs', () => {
    render(
      <Filters
        categories={mockCategories}
        selectedCategory="All Products"
        onCategoryChange={() => {}}
      />
    );
    
    const inputs = screen.getAllByRole('radio');
    expect(inputs).toHaveLength(mockCategories.length);
  });
});
