import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import {Info} from '../styled/StyledCardDeck';
import nigeria from '../images/nigeria.jpg';
import nigeria_2 from '../images/nigeria2.jpg'
import corona from '../images/corona.jpg';
import lagos from '../images/lagos.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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


const TotalStatistics = ()=>{
    return (
        <InfoCard img = {nigeria_2} title = {`nigeria's total statistics`}>
            <p>Statistics Today</p>
            <ul>
                <li>
                    <div>
                    <FontAwesomeIcon icon = 'virus'/>
                    <p>Total Confirmed cases</p>
                    </div>
                    <p>276</p>
                </li>
                <li>
                    <div>
                    <FontAwesomeIcon icon = 'file-medical'/>
                    <p>New Cases</p>
                    </div>
                    <p>22</p>
                </li>
                <li>
                    <div>
                    <FontAwesomeIcon icon = 'thumbs-up'/>
                    <p>Recovered</p>
                    </div>
                    <p>44</p>
                </li>
                <li>
                    <div>
                    <FontAwesomeIcon icon = 'user-minus'/>
                    <p>Death</p>
                    </div>
                    <p>6</p>
                </li>
            </ul>
        </InfoCard>
    );
}


const Lagos = ()=>{
    return (
        <InfoCard img = {lagos} title = {`Lagos today`}>
            <p>Total Cases Today</p>
            <ul>
                <li>
                <FontAwesomeIcon />
                    <p>Total Confirmed cases</p>
                    <p>276</p>
                </li>
                <li>
                <FontAwesomeIcon />
                    <p>New Cases</p>
                    <p>22</p>
                </li>
                <li>
                <FontAwesomeIcon />
                    <p>Recovered</p>
                    <p>44</p>
                </li>
                <li>
                    <FontAwesomeIcon />
                    <p>Death</p>
                    <p>6</p>
                </li>
            </ul>
        </InfoCard>
    );
}

export {TotalStatistics,Lagos};