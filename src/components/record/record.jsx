import React from 'react';
import '../item-details/item-details.css';

const Record = ({ item, label, field }) => (
  <li className='details-list-item'>
    <span className='item-title'>{label}</span>
    <span>{item[field]}</span>
  </li>
)
export default Record;