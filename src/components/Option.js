import React, {useState} from 'react';
import { Radio } from '@material-ui/core';
import StyledOption from '../styled/StyledOption';
import {useTransition,animated} from 'react-spring'
import _ from 'lodash';

const Option = ({label, error, complimentPreValue, preValue, complimentHandler ,hasCompliment, compliment, options, handleChange})=>{
   

    const getSelectedIndex = (selectedValue)=>{
        let index = _.findIndex(options, (o)=>o.value == selectedValue);
        if(index === -1) return options.length;
        return index;
    }

    
    const [checkedIndex, setCheckedIndex] = useState(getSelectedIndex(preValue));
    const [showComplement,setShowComplement] = useState(false);

    const transitions = useTransition(showComplement, null, {
    from: { transform: 'translateY(0px)', opacity: 0 },
    enter: { transform: 'translateY(30px)', opacity: 1 },
    leave: { transform: 'translateY(0px)', opacity: 0 },
    })


    const transitions2 = useTransition(error, null, {
        from: { transform: 'translateX(15px)', opacity: 0 },
        enter: { transform: 'translateY(0px)', opacity: 1 },
        leave: { transform: 'translateY(15px)', opacity: 0 },
     })


    const handleOptionChange = (e,index)=>{
        setCheckedIndex(index);
        let { value } = options[index];
        handleChange && handleChange(value);
        hasCompliment && handleShowOfComplement(value);
    }

    const handleClickFromElem= (e)=>{
        let index = +e.target.dataset.index;
        setCheckedIndex(index);
        let {value} = options[index];
        handleChange && handleChange(value);
        hasCompliment && handleShowOfComplement(value);
    }

    const handleShowOfComplement = (show)=>{
        setShowComplement(show);
    }

    const handleComplimentChange = (v)=>{
        complimentHandler(v)
        handleShowOfComplement(false);
    }

    return (
        <StyledOption>
            <div className="Header">
                <p>{label}</p>
                {
                    transitions2.map(({ item, key, props }) =>
                    item && <animated.span>REQUIRED</animated.span>)
                }
            </div>
            <div className="Options">
                {
                    options.map(({title,desc},index)=>{
                        return (
                            <div data-index = {index} onClick = {handleClickFromElem} className="Option">
                                <div data-index = {index} onClick = {handleClickFromElem} className="RadioButton">
                                <Radio style = {{pointerEvents:'none'}} checked = {index === checkedIndex} data-index = {index} onChange = {(e)=>handleOptionChange(e,index)}/>
                                </div>
                                <div className="Description">
                                    <h4>{title}</h4>
                                    {
                                        desc &&
                                        <p>{desc}</p>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                transitions.map(({ item, key, props }) =>
                  item && (
                    <animated.div style = {props} className="Compliment">
                    <div className="Question">
                        <compliment.component preValue = {complimentPreValue} handleChange = {handleComplimentChange} label = {compliment.label} options = {compliment.options}/>
                    </div>
                    </animated.div>
                  )     
                )
            }
        </StyledOption>
    );
}

export default Option;