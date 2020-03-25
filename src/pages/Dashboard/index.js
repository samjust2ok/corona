import React from 'react';
import Card from '../../components/Card';
import Background from '../../images/covid-19-map.jpg'
import BadgeAvatars from '../../components/imgProfile'
import RoomIcon from '@material-ui/icons/Room';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import './styles.scss';

const bgImage = {
  background: `linear-gradient(rgba(0, 0, 0,.6), rgba(0, 0, 0,1)),  url(${Background}) no-repeat`,
  backgroundSize: 'cover',
}
const Dashboard = () => (
  <div className='dashboard'>
    <div className='bg-color'  style={bgImage}>
      <div className='max-width center-field'>
        <div className='welcome-text'>
          <BadgeAvatars />
          <span> Your status: undefined <Button variant="outlined" color="primary" size="small"> <EditIcon /> </Button></span> <br />
          <span>  <RoomIcon /> Ibadan, Nigeria </span>
        </div>
       
        <form className='city-search'>
          <input className='city-search-input' placeholder='Try Ibadan' />
          <button type='submit' />
        </form>
      </div>
    </div>
    <div className='max-width'>
      <section className='results'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  </div>
);

export default Dashboard;
