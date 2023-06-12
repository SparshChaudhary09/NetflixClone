import React from "react";
import "./loginpage.styles.css";

import SignIn from "../../components/signin/signin.component";
// import SignUp from "../../components/signup/signup.component";

const LoginPage = () => {
    const [signIn, setSignIn] = React.useState(false);

    return(
        <div className="loginpage">
            <div className="loginpage_background">
                <img 
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="logo" 
                    className="loginpage_logo" 
                />
                <button onClick={()=> setSignIn(true)} 
                    className="loginpage_button">SignIn</button>
                <div className="loginpage_gradient" />
            </div>
            <div className="loginpage_body">
                {
                    signIn ? (<SignIn />)
                    : 
                    (
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch anywhere. Cancel at any time</h2>
                            <h3>Ready to watch?Enter your email to create or restart your membership.</h3>

                            <div className="loginpage_input">
                                <form >
                                    <input type="email" placeholder="Enter your Email Address"/>
                                    <button className="loginpage_inputbutton">GET STARTED</button>
                                </form>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default LoginPage;