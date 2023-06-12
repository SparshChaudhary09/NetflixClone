import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import "./profile-overlay.styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCircleCheck } from '@fortawesome/free-regular-svg-icons';

import {toggleOverlay} from "../../redux/user/user.action";

import {SaveProfile} from "../../data/user-profiles";

const ProfileOverlay = ({isHidden, toggleOverlay, userProfile}) => {

    const [username, setUsername] = useState(null);

    useEffect(()=> {
        setUsername(userProfile.name);
    }, [userProfile]);

    const handleClose = () => {
        toggleOverlay();
        setUsername(null);
    }
    
    console.log(username);

    const handleChange = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const handleSave = () => {
        console.log("UserName Saved");
        SaveProfile(userProfile.key, userProfile);
    }
    
    const handleDelete = () => {
        console.log("User Deleted");
    }

    return(
        <div>
            <div className={`modal ${isHidden ? 'hidden' : ''}`}>
                <button className="close-modal" onClick={handleClose}>&times;</button>
                <div className="form-container">
                    <img src={userProfile.avatarUrl} alt="" />
                    <div className="form-input">
                        <input type="text" value={username} onChange={handleChange} />
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                            <span className="heading">Kid?</span>
                        </label>
                        <div className="font-buttons">
                            <button onClick={handleSave}><FontAwesomeIcon icon={faCircleCheck} />  Save</button>
                            <button onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan} />  Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`overlay ${isHidden ? 'hidden' : ''}`}></div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isHidden: state.user.isHiddenOverlay
});

const mapDispatchToProps = (dispatch) => ({
    toggleOverlay: ()=> dispatch(toggleOverlay())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileOverlay);