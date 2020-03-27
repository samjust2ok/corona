import React from 'react';
import './styles.css';

const Card = (props) => (
  <div className='card-container'>
    <h4>{props.name}</h4>
    <ul>
      <li className='card-row'>
        <p>Total Cases</p>
        <p>{props.isCases}</p>
      </li>
      <li className='card-row'>
        <p>Positive</p>
        <p>{props.isPositive}</p>
      </li>
      <li className='card-row'>
        <p>Negative</p>
        <p>{props.isNegative}</p>
      </li>
      <li className='card-row'>
        <p>Recovered</p>
        <p>{props.isRecovered}</p>
      </li>
      <li className='card-row'>
        <p>Death</p>
        <p>{props.isDeath}</p>
      </li>
    </ul>
  </div>
);
export default Card;
