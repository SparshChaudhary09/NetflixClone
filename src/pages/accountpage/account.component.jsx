import React from "react";
import {connect} from "react-redux";
import "./account.styles.css";

import {auth} from "../../firebase/firebase"; 

import Navbar from "../../components/Navbar/Navbar.component";

const AccountPage = ({currentUser}) => {
    return(
        <div className="accountpage">
            <Navbar />
            <div className="accountpage_body">
                <h1>Manage Account</h1>
                <div className="accountpage_info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                    <div className="accountpage_details">
                        <h2>{currentUser?.email}</h2>
                        <div className="accountpage_plans">
                            <h3>Plans (Current Plan: premium)</h3>
                            <p>Renewal date: 04/09/2022</p>
                            <div className="accountpage_plans_info">
                                <div className="accountpage_plans_type">
                                    <p>Netflix Standard<br />1080p</p>
                                    <button>Subscribe</button>
                                </div>
                                <div className="accountpage_plans_type">
                                    <p>Netflix Basic<br />480p</p>
                                    <button>Subscribe</button>
                                </div>
                                <div className="accountpage_plans_type">
                                    <p>Netflix Premium<br />4K+HDR</p>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                            <button className="accountpage_button" onClick={()=> auth.signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(AccountPage);