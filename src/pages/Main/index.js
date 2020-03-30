import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Background from '../../images/covid-19-map.jpg'
import Cup from '../../images/cup.svg'
import Droplet from '../../images/droplet.svg'
import Flu from '../../images/flu.svg'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Cases from '../../Cases.js';
import './styles.css';

const bgImage = {
  background: `linear-gradient(rgba(0, 0, 0,.6), rgba(0, 0, 0,1)),  url(${Background}) no-repeat`,
  backgroundSize: 'cover',
}



const Main = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };



  React.useEffect(() => {
    const results = Cases.map((cases) => {
      return cases;
    }).filter(cases =>
      cases.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    setSearchResults(results);
  }, [searchTerm]);

return(
  <div className='main'>
    <div className='bg-color'  style={bgImage}>
      <div className='max-width center-field'>
        <h2 className='welcome-text'>
          Report Suspected cases.
        </h2>
        {/* <form className='city-search'>
          <input 
          className='city-search-input' 
          placeholder='Try Ibadan' 
          value={searchTerm}
          onChange={handleChange}
          />
          <button type='submit'> <SearchIcon /> </button>
        </form> */}
      </div>
    </div>
    <div className='max-width'>
      {/* <section className='results'>
        {
          searchResults.map(result => (
            <div>
              <Card 
              name={result.name}
              isCases={result.isCases}
              isPositive={result.isPositive}
              isNegative={result.isPositive}
              isRecovered={result.isRecovered}
              isDeath={result.isDeath}
              />
            </div>
          ))
        }
      </section> */}
      <center> 
        <h3 className="heading__text"> How can it spread? </h3> 
        </center>
      <section className="how__it__spread">
        <section>
        <img src={Cup} alt="contaminate"/>
        <h1>Contaminated object and Substances</h1>
        <p>It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads</p>
        </section>
        <section>
        <img src={Droplet} alt="transmission"/>
        <h1>Air Transmission of droplets</h1>
        <p>These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs.</p>
        </section>
        <section>
        <img src={Flu} alt="Flu"/>
        <h1>Transmission among Humans</h1>
        <p>The virus is thought to spread mainly
            Between people who are in close contact with one another (within about 6 feet) or 
            through respiratory droplets produced when an infected person coughs or sneezes.
        </p>
        </section>
        <section>
          <Button color="primary" variant="outlined" component={Link} to="/tips" className="next__link"> Health Tips <DoubleArrowIcon /> </Button>
        </section>
      </section>
       
    </div>
   
  </div>
)}

export default Main;
