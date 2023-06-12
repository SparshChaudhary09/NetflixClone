import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import './App.css';

import Homepage from "./pages/homepage/homepage.component";
import LoginPage from "./pages/loginpage/loginpage.component";
import AccountPage from "./pages/accountpage/account.component";
import ProfilePage from "./pages/profilepage/profilepage.component";

import {auth} from "./firebase/firebase";
import {emailSignIn} from "./redux/user/user.action";

class App extends React.Component {
  constructor() {
    super();
  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){ // Logged In
        const user = {uid: userAuth.uid, email: userAuth.email};
        this.props.setCurrentUser(user);
      }
      else this.props.setCurrentUser(null); //Logged Out
    });
  }

  componentDidUnMount()
  {
    this.unsubscribeFromAuth();
  }

  render()
  {
    const {currentUser} = this.props;

    return (
      <div className="App-header">
          <Switch>
            <Route exact path="/" render={()=> currentUser ? <Redirect to="/home" /> : <LoginPage /> } />
            <Route exact path="/home" render={()=> currentUser ? <Homepage /> : <Redirect to="/" /> } />
            <Route exact path="/account" render={()=> currentUser ? <AccountPage /> : <Redirect to="/" /> } />
            <Route exact path="/profile" render={()=> currentUser ? <ProfilePage /> : <Redirect to="/" /> } />
          </Switch>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(emailSignIn(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
