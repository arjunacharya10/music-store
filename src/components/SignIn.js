import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import MainMenu from './MainMenu';
import 'tachyons';
import './SignIn.css';

import Home from '../video/home.mp4';

firebase.initializeApp({
  apiKey: 'AIzaSyAhxq9NsmapW_Ou5a_yr0DKFfhKHCZXBDg',
  authDomain: 'onlinemusicstore-c4075.firebaseapp.com'
});

class SignIn extends Component {

  state={
    isSignedIn: false,
    currentUser: null
  };


  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: ()=> false
    }
  };

  componentDidMount=()=>{
    
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({isSignedIn: !!user});
      if(this.state.isSignedIn){
        this.setState({currentUser: user});

      console.log(this.state.currentUser);
      }
    })
  }


  render() {
    return (
      <div>
        {
          this.state.isSignedIn ?
          <MainMenu currentUser = {this.setState.currentUser}/>
          :
          
          <div className="ui container">

                <div>
                    <video autoPlay muted loop id="myVideo">
                        <source src="./home.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="ui container" style={{position:'relative',color:'#f1f1f1',marginTop: '30px',maxWidth: '100px'}}>
 
                    <main class="pa4 black-80 ui">
                        <form class="measure center">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend class="f4 fw6 ph0 mh0">Sign In</legend>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div class="mv3">
                                <label class="db fw6 lh-copy f6" for="password">Password</label>
                                <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                            </div>
                            <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                        </fieldset>
                        <div class="">
                            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                        </div>
                        <div class="lh-copy mt3">
                            <a href="#0" class="f6 link dim black db">Sign up</a>
                            <a href="#0" class="f6 link dim black db">Forgot your password?</a>
                        </div>
                        </form>

                            <h4 className="ui" style={{textAlign:'center'}}>OR</h4>
                    </main>

                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth = {firebase.auth()}
                    />
                
                </div>
            </div>
        }
      </div>
    );
  }
}

export default SignIn;
