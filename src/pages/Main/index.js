import React from 'react';
import Card from '../../components/Card';
import Background from '../../images/covid-19-map.jpg'
import SearchIcon from '@material-ui/icons/Search'
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
          Stay informed! Get Realtime updates about Coronavirus outbreaks in
          your city.
        </h2>
        <form className='city-search'>
          <input 
          className='city-search-input' 
          placeholder='Try Ibadan' 
          value={searchTerm}
          onChange={handleChange}
          />
          <button type='submit'> <SearchIcon /> </button>
        </form>
      </div>
    </div>
    <div className='max-width'>
      <section className='results'>
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
      </section>
    </div>
  </div>
)}

export default Main;
