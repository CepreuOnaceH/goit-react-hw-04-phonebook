import React from 'react';
const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      name="filter"
      placeholder="Start to tape your contact`s name"
      value={filter}
      onChange={e => onFilterChange(e.target.value)}
    />
  );
};
export default Filter;
