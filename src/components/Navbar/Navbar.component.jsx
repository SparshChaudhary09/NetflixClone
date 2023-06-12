import React from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import "./Navbar.styles.css";

import UserDropDown from "../user-dropdown/user-dropdown.component";
import {toggleProfile} from "../../redux/user/user.action";

const Navbar = ({toggleProfile, isHidden}) => {
    
    const [show, handleShow] = React.useState(false);
    const history = useHistory();

    React.useEffect(()=> {
        window.addEventListener("scroll", ()=> {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });

        // Removing Listener, returning because we want useEffect to act like ComponentDidUnmount
        return () => {
            window.removeEventListener("scroll", null);
        }
    }, []);

    return(
        <div className={`nav ${show && "nav-black"}`}>
            <img 
                className="nav-logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDDsM52Rpekdni9rMIhGXilpDsVeXPqFMnV1DxdmbflpUyFsE9HjzoRYZZWbEWDxyNpSQ&usqp=CAU" 
                alt="Netflix Logo"
                onClick={()=> history.push('/home')} 
            />
            <div className="nav-profile" onClick={()=> toggleProfile()}>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                    alt="Netflix Avatar" 
                />
                <div className="nav-dropdown">▾</div>
            </div>
            { isHidden ? null : <UserDropDown />}
        </div>
    );
}

const mapStateToProps = (state) => ({
    isHidden: state.user.isHiddenProfile
});

const mapDispatchToProps = (dispatch) => ({
    toggleProfile: () => dispatch(toggleProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);