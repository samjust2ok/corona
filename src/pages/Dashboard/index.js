import React from 'react';
import Card from '../../components/Card';
import Background from '../../images/covid-19-map.jpg'
import BadgeAvatars from '../../components/imgProfile'
import RoomIcon from '@material-ui/icons/Room';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search'
import { Option } from '../../components/Input'
import './styles.scss';

const bgImage = {
  background: `linear-gradient(rgba(0, 0, 0,.6), rgba(0, 0, 0,1)),  url(${Background}) no-repeat`,
  backgroundSize: 'cover',
}
const MenuStyle = {
  backgroundColor: '#F50057', 
  marginTop: '-10px', 
  color: '#fff'
}
  function Dashboard(){
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
  <div className='dashboard'>
    <div className='bg-color'  style={bgImage}>
      <div className='max-width center-field'>
        <div className='welcome-text'>
          <BadgeAvatars />
          <span> Your status: undefined &nbsp;
          <Button variant="outlined" color="primary" size="small" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> 
          <EditIcon /> 
          </Button>
          </span> <br />
          <span>  <RoomIcon /> Ibadan, Nigeria </span>

        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style={MenuStyle}> Update your Medical Status </MenuItem>
        <MenuItem onClick={handleClose}>
        <Option 
        label="Suspected"
        value="suspected"
        />
         </MenuItem>
        <MenuItem onClick={handleClose}>
        <Option 
        label="Positive"
        value="positive"
        />
         </MenuItem>
        <MenuItem onClick={handleClose}>
        <Option 
        label="Negative"
        value="negative"
        />
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Option 
        label="Recovered"
        value="recovered"
        />
        </MenuItem>
      </Menu>
        </div>
       
        <form className='city-search'>
          <input className='city-search-input' placeholder='Try Ibadan' />
          <button type='submit'> <SearchIcon /> </button>
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
};

export default Dashboard;
