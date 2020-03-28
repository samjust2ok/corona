import React from 'react';
import './styles.css';
import RoomIcon from '@material-ui/icons/Room';
import Divider from '@material-ui/core/Divider';

const Card = (props) => (
  <div className='card-container'>
     <h4> <RoomIcon /> {props.name}</h4>
     <span className="underline"> </span>
     
    <ul>
      <li className='card-row'>
        <p className="tc">Total Cases</p>
        <p>{props.isCases}</p>
      </li>
      <Divider />
      <li className='card-row'>
        <p className="p">Positive</p>
        <p>{props.isPositive}</p>
      </li>
      <Divider />
      <li className='card-row'>
        <p className="n">Negative</p>
        <p>{props.isNegative}</p>
      </li>
      <Divider />
      <li className='card-row'>
        <p className="r">Recovered</p>
        <p>{props.isRecovered}</p>
      </li>
      <Divider />
      <li className='card-row'>
        <p className="d">Death</p>
        <p>{props.isDeath}</p>
      </li>
    </ul>
  </div>
);
export default Card;
