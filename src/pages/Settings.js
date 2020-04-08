import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledSettings from '../styled/StyledSettings';
import { CustomizedSwitch } from '../components/Input';


const Settings = ({props, hide})=>{
    return(
        <StyledSettings style = {props} style = {props}>
            <div className="Container">
                <div className="Back">
                    <FontAwesomeIcon onClick = {hide} icon = 'arrow-left'/>
                </div>
                <div className="Title">
                    <h1>Settings</h1>
                </div>
                <div className="Content">
                    <div className="SettingCategory">
                        <div className="Header">
                            <FontAwesomeIcon icon = 'user'/>
                            <h3>Account</h3>
                        </div>
                        <div className="SettingContents">
                            <div className="Setting">
                                <p>Edit Personal profile</p>
                                <FontAwesomeIcon icon = 'angle-right'/>
                            </div>
                            <div className="Setting">
                                <p>Medical Information</p>
                                <FontAwesomeIcon icon = 'angle-right'/>
                            </div>
                        </div>
                    </div>
                    <div className="SettingCategory">
                        <div className="Header">
                            <FontAwesomeIcon icon = 'bell'/>
                            <h3>Notification</h3>
                        </div>
                        <div className="SettingContents">
                            <div className="Setting">
                                <p>Emails</p>
                                <div>
                                    <CustomizedSwitch/>
                                </div>
                            </div>
                            <div className="Setting">
                                <p>Phone Calls</p>
                                <div>
                                    <CustomizedSwitch/>
                                </div>
                            </div>
                            <div className="Setting">
                                <p>Messages</p>
                                <span className = "Info">5</span>
                            </div>
                        </div>
                    </div>
                    <div className="SettingCategory">
                        <div className="Header">
                            <FontAwesomeIcon icon = 'asterisk'/>
                            <h3>More</h3>
                        </div>
                        <div className="SettingContents">
                            <div className="Setting">
                                <p>Allow tracking</p>
                                <div>
                                    <CustomizedSwitch/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Logout">
                    <button>
                        <FontAwesomeIcon icon = 'sign-out-alt'/>
                        Logout
                    </button>
                </div>
            </div>
        </StyledSettings>
    )
}

export default Settings;