import React from 'react';
import './Filters.css';

function Filters({ categories, selectedCategory, onCategoryChange }) {
  return (
    <aside className="filters-sidebar">
      <div className="filters-container">
        <h3 className="filters-title">Categories</h3>
        
        <div className="category-list">
          {categories.map((category) => (
            <label key={category} className="category-item">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                aria-label={`Filter by ${category}`}
                className="radio-input"
              />
              <span className="radio-label">{category}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Filters;
