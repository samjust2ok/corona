import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledProfile, { StyledDisplay } from '../styled/StyledProfile';
import { useTransition, animated } from 'react-spring';
import Settings from './Settings';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = ()=>{
    const [showSettings,setShowSettings] = useState(false);
    const user = useSelector(state=>state.user);
    const history = useHistory();
    
    if(!user) history.push('/login')

    const transitions = useTransition(showSettings, null, {
        from: { transform: 'translateX(100%)', opacity: 0.5 },
        enter: { transform: 'translateX(0%)', opacity: 1 },
        leave: { transform: 'translateX(100%)', opacity: 0.5 },
    })
    const transitions2 = useTransition(!showSettings, null, {
        from: { transform: 'scale(0.5)', opacity: 0 },
        enter: { transform: 'scale(1)', opacity: 1 },
        leave: { transform: 'scale(0)', opacity: 0 },
    })

    
    const showS = ()=>setShowSettings(true);
    const hideSettings = ()=>setShowSettings(false);
    


    return (
        <StyledProfile>
                {
                    transitions2.map(({item,key,props})=>
                    item && (
                        <animated.div style = {props} className="Container">
                        <div className="Back">
                            <FontAwesomeIcon onClick = {()=>history.goBack()} icon = 'arrow-left'/>
                            <FontAwesomeIcon onClick = {showS} icon = 'cog'/>
                        </div>
                        <div className="Title">
                            <h1>Profile</h1>
                        </div>
                        <div className="Identity">
                            <div className = 'Overlay'>
                                <div className = 'Initials'>
                                    <h1>{`${user.firstName.charAt(0)} ${user.lastName.charAt(0)}`}</h1>
                                </div>
                                <div className = "Reported">
                                    <FontAwesomeIcon icon = 'file-medical'/>
                                </div>
                            </div>
                        </div>
                        <div className="Contents">
                            <Display value = {`${user.firstName} ${user.lastName}`} tag = 'Full name'/>
                            <Display value = {user.email} tag = 'email'/>
                            {
                                user.phoneNumber && 
                                <Display value = {user.phoneNumber} tag = 'Phone Number'/>
                            }
                            {
                                user.state && 
                                <Display value = {user.state} tag = 'state'/>
                            }
                        </div>
                        <div className="Logout">
                            <button>
                                <FontAwesomeIcon icon = 'sign-out-alt'/>
                                Logout
                            </button>
                        </div>
                    </animated.div>
                    ))
                }
                {
                    transitions.map(({ item, key, props }) =>
                    item && 
                       (   <Settings key = {key} props = {props} hide = {hideSettings}/>
                       ))
                }
        </StyledProfile>
    );
}

const Display = ({value,tag})=>{
    return(
        <StyledDisplay>
            <p className = 'Tag'>{tag}</p>
            <p className = 'Value'>{value}</p>
        </StyledDisplay>
    );
}

export default Profile;