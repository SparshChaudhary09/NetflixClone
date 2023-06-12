import React from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import "./user-dropdown.styles.css";

import {auth} from "../../firebase/firebase";
import {toggleProfile} from "../../redux/user/user.action";

import UserProfiles from "../../data/user-profiles";

const UserDropDown = ({toggleProfile}) => {
    const userProfile = UserProfiles;

    const history = useHistory();

    const handleClick = (link) => {
        history.push(link);
        toggleProfile();
    }
    
    const handleSignout = () => {
        toggleProfile();
        auth.signOut();
    }

    return (
        <div className="user-dropdown">
            <div className="user-profiles">
                {
                    userProfile.map(user => (
                    <div key={user.key} className="user-profile">
                        <img 
                            src={user.avatarUrl} 
                            alt="" 
                        />
                        <span>{user.name}</span>
                    </div>
                    ))
                }
            </div>
            <div className="details">
                <span onClick={()=> handleClick("/profile")}>Manage Profiles</span>
                <span onClick={()=> handleClick("/account")}>Account</span>
                <span onClick={()=> handleSignout()} >Sign Out</span>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleProfile: ()=> dispatch(toggleProfile())
});
export default connect(null, mapDispatchToProps)(UserDropDown);