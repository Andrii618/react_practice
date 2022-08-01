import React from 'react';

import './filter.scss';

const Filter = ({ filterText, count, onChange }) => (
  <div className="filter">
    <span className="filter__count">{count}</span>
    <input onChange={onChange} type="text" className="filter__input" value={filterText} />
  </div>
);

export default Filter;
