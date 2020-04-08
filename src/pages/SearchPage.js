import React,  {useState, useCallback} from 'react';
import StyledSearchPage, { StyledInput } from '../styled/StyledSearchPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ncdcCallCenter } from '../constants/appConst';
import { useTransition, animated} from 'react-spring';
import { useHistory } from 'react-router-dom';

const SearchPage = ()=>{
    const [list, setList] = useState(ncdcCallCenter);
    

    const handleTextChange = useCallback((text)=>{
        const filtered = ncdcCallCenter.filter((item)=>item.state.toLowerCase().includes(text.toLowerCase())||item.initials.toLowerCase().includes(text.toLowerCase()));
        setList(filtered)
    })

    
    const transitions = useTransition(list, null, {
        from: {opacity: 0,transform: 'translate3d(-10px,0px,0px)'},
        enter:{opacity: 1,transform: 'translate3d(0px,0px,0px)'},
        leave: {opacity: 0,transform: 'translate3d(10px,0px,0px)'},
    })

    const history = useHistory();


    return (
        <StyledSearchPage>
            <div className="Container">
                <div className="Back">
                    <FontAwesomeIcon onClick = {history.goBack} icon = 'arrow-left'/>
                </div>
                <div className="Search">
                    <Search handleChange = {handleTextChange}/>
                </div>
                <div className="Content">
                    {
                        list.length === 0 ?
                        
                            <div className = 'NCDCContact'>
                                <h3>Ooooops :-(</h3>
                            </div>:
                        transitions.map(({key,item,props},i)=>(
                            <animated.div className = 'State' key = {i} style = {props}>
                                <div className="ItemContent">
                                    <div className="Initials">
                                        {list[i].initials}
                                    </div>
                                    <div className="Content">
                                        <h3>{list[i].state}</h3>
                                        <p>{list[i].number}</p>
                                    </div>
                                </div>
                                <div className="Icons">
                                    <FontAwesomeIcon icon = 'phone'/>
                                    <FontAwesomeIcon icon = 'ellipsis-h'/>
                                </div>
                            </animated.div>
                        ))
                    }
                </div>
            </div>
        </StyledSearchPage>
    );
}


const Search = ({handleChange})=>{
    const [value,setValue] = useState('');
    const handleInputChange = (e)=>{
        let text = e.target.value;
        setValue(text)
        handleChange && handleChange(text);
    }
    return(
        <StyledInput>
            <input value = {value} onChange = {handleInputChange} type="text" placeholder = 'Lagos'/>
            <div className="Icon">
                <FontAwesomeIcon icon = 'search'/>
            </div>
        </StyledInput>
    );
}

export default SearchPage;