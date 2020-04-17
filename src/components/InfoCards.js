import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import {Info,StyledSurvivalInfo} from '../styled/StyledCardDeck';
import nigeria from '../images/nigeria.jpg';
import nigeria_2 from '../images/nigeria2.jpg'
import corona from '../images/corona.jpg';
import world from '../images/world.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import format from 'format-number';

const InfoCard = ({title, img, children})=>{
    return (
        <Info img = {img}>
        <div className="Header">
            <div className="Title">
                <span>

                </span>
                <p>{title}</p>
            </div>
            <FontAwesomeIcon icon = 'bell'/>
        </div>
        <div className="Image">
            
        </div>
        <div className="Content">
            {children}
        </div>
        </Info>
    );
}


const TotalStatistics = ({data})=>{
    return (
        <InfoCard img = {nigeria_2} title = {`nigeria's total statistics`}>
            <p>Statistics Today</p>
            <ul>
                <li>
                    <div>
                    <FontAwesomeIcon icon = 'virus'/>
                    <p>Total Confirmed cases</p>
                    </div>
                    <p>{format()(data.cases)}</p>
                </li>
                <li>
                    <div>
                    <FontAwesomeIcon icon = 'file-medical'/>
                    <p>New Cases</p>
                    </div>
                    <p>{format()(data.todayCases)}</p>
                </li>
                <li>
                    <div>
                    <FontAwesomeIcon icon = 'thumbs-up'/>
                    <p>Recovered</p>
                    </div>
                    <p>{format()(data.recovered)}</p>
                </li>
                <li>
                    <div>
                    <FontAwesomeIcon icon = 'user-minus'/>
                    <p>Death</p>
                    </div>
                    <p>{format()(data.deaths)}</p>
                </li>
            </ul>
        </InfoCard>
    );
}


const World = ({data})=>{
    return (
        <InfoCard img = {world} title = {`round the globe`}>
            <p>Statistics Today</p>
            <ul>
                <li>
                    <div>
                    <FontAwesomeIcon icon = 'virus'/>
                    <p>Total Confirmed cases</p>
                    </div>
                    <p>{format()(data.cases)}</p>
                </li>
                <li>
                    <div>
                    <FontAwesomeIcon icon = 'file-medical'/>
                    <p>New Cases</p>
                    </div>
                    <p>{format()(data.todayCases)}</p>
                </li>
                <li>
                    <div>
                    <FontAwesomeIcon icon = 'thumbs-up'/>
                    <p>Recovered</p>
                    </div>
                    <p>{format()(data.recovered)}</p>
                </li>
                <li>
                    <div>
                    <FontAwesomeIcon icon = 'user-minus'/>
                    <p>Death</p>
                    </div>
                    <p>{format()(data.deaths)}</p>
                </li>
            </ul>
        </InfoCard>
    );
}

const SurvivalInfo = ({images})=>{
    return (
        <StyledSurvivalInfo>
            {
                images.map((img,index)=>{
                    return (
                        <div key = {index} className="ImageCard">
                            <img src={img} alt=""/>
                        </div>
                    );
                })
            }
        </StyledSurvivalInfo>
    );
}

export {TotalStatistics,World,SurvivalInfo};