import React from 'react';
import {connect} from "react-redux";
import "./profilepage.styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

import Navbar from "../../components/Navbar/Navbar.component";
import ProfileOverlay from "../../components/profile-overlay/profile-overlay.component";

import UserProfiles from "../../data/user-profiles";

import {toggleOverlay} from "../../redux/user/user.action";

const ProfilePage = ({toggleOverlay}) => {
    
    const [editProfile, setEditProfile] = React.useState({});

    const handleProfile = (profile) => {
        setEditProfile(profile);
        toggleOverlay();
    }
    
    return(
        <div>
            <Navbar />
            <div className="profile-container">
                <h2 className="profile-container-title">Manage Profiles</h2>
                <div className="profiles">
                {
                    UserProfiles?.map(user => (
                    <div key={user.key} className="profile" onClick={()=> handleProfile(user)}>
                        <div className="profile-avatar">
                            <img
                                src={user.avatarUrl} 
                                alt="" 
                            />
                            <FontAwesomeIcon className="icon" icon={faPenToSquare} />
                        </div>
                        <span>{user.name}</span>
                    </div>
                    ))
                }
                </div>
            </div>
            <ProfileOverlay userProfile={editProfile}/>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleOverlay: ()=> dispatch(toggleOverlay())
})

export default connect(null, mapDispatchToProps)(ProfilePage);