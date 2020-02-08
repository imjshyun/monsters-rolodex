import React from 'react';
// Import style sheet
import './search-box.styles.css';

// In the function arguments, we destructure the props
// We pass in a placeholder and a handleChange argument
// We set those as the placeholder and the onChange values
// We then define those in the App.js file where we
// use the component - this allow it to be reusable and
// makes the values dynamic
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
