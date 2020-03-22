import React from 'react';
import Card from '../../components/Card';
import './styles.css';

const Main = () => (
  <>
    <section className='main'>
      <h2 className='welcome-text'>
        Stay informed! Get Realtime updates about Coronavirus outbreaks in your
        city.
      </h2>
      <form className='city-search'>
        <input className='city-search-input' placeholder='Try Ibadan' />
        <button type='submit' />
      </form>
    </section>
    <section className='results'>
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  </>
);

export default Main;
