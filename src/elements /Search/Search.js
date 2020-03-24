import React, { Component } from 'react';
import './Search.module.scss';
import InputField from '../InputField/InputField';
import ArrowRight from '@material-ui/icons/ArrowRight'
import YoutubeSearchedFor from '@material-ui/icons/YoutubeSearchedFor';

import Button from '../Button'


class SearchBar extends Component {
    render() {
        return (
            <>
           <InputField 
            type="text"
            placeholder="Search for Vendors"
           />
           {this.props.propSelect === 'button' 
           ?
           ( <Button>Search</Button> )
           :
           ( <div className="searchIconWrapper"> <YoutubeSearchedFor className="searchIcon"/> </div> )
           }
           </>
        );
    }
}

export default SearchBar;