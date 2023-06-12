import React from "react";
import "./signup.styles.css";

import {auth} from "../../firebase/firebase";

class Signup extends React.Component {
    constructor() {
        super();

        this.state = {
            username: "",
            email: "",
            password: "",
        }
    }

    
    handleChange = (event) => {
        const {name, value} = event.target;
        
        this.setState({[name]: value}, ()=> console.log(this.state));
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        
        const { username, email, password } = this.state;
        
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            console.log(userAuth.user)
        }).catch(error => alert(error.message));
    }
    
    render() {
        const { username, email, password } = this.state;
        
        return(
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={username} onChange={this.handleChange} />
                    <input type="email" name="email" value={email} onChange={this.handleChange} />
                    <input type="password" name="password" value={password} onChange={this.handleChange} />
                    <button type="submit">SIGNUP</button>
                </form>
            </div>
        );
    }
};

export default Signup;