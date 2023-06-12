import React from "react";
import "./signin.styles.css";

import {auth, signinWithGoogle} from "../../firebase/firebase";

const SignIn = () => {
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .catch((error) => alert(error.message));
    }

    const signIn = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .catch((error) => alert(error.message));
    }

    const googleSignIn = (e) => {
        e.preventDefault();
        signinWithGoogle();
    }

    return(
        <div className="signin">
            <form>
                <h1>Sign In</h1>
                <input type="Email" placeholder="email" ref={emailRef} />
                <input type="password" placeholder="password" ref={passwordRef} />
                <button className="emaillogin" type="submit" onClick={signIn}>Sign In</button>
                <button className="googlelogin"type="submit" onClick={googleSignIn}>G</button>
                <h4>
                    <span className="signin_gray">New to Netflix? </span>
                    <span className="signin_link" onClick={register}>Sign Up Now</span>
                </h4>
            </form>
        </div>
    );
}

export default SignIn;