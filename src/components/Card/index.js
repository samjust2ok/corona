import React from 'react';
import './styles.css';

const Card = () => (
  <div className='card-container'>
    <h4>Lagos</h4>
    <ul>
      <li className='card-row'>
        <p>Total Cases</p>
        <p>12</p>
      </li>
      <li className='card-row'>
        <p>Positive</p>
        <p>12</p>
      </li>
      <li className='card-row'>
        <p>Negative</p>
        <p>12</p>
      </li>
      <li className='card-row'>
        <p>Recovered</p>
        <p>12</p>
      </li>
      <li className='card-row'>
        <p>Death</p>
        <p>12</p>
      </li>
    </ul>
  </div>
);
export default Card;
