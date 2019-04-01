import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import MainMenu from './MainMenu';
import 'tachyons';
import './SignIn.css';
import SigninForm from './SigninForm';
import Register from './Register';
import Spotify from './Spotify';

import Home from '../video/home.mp4';
import Axios from 'axios';

firebase.initializeApp({
  apiKey: 'AIzaSyAhxq9NsmapW_Ou5a_yr0DKFfhKHCZXBDg',
  authDomain: 'onlinemusicstore-c4075.firebaseapp.com'
});

class SignIn extends Component {

  state={
    isSignedIn: false,
    currentUser:{
      name: null,
      email: null,
      avatar: null,
      id: null
    },
    currenRoute: 'signin',
    spotifyAuth: false,
    access_token: ''
  };

  onRouteChange=(route)=>{
      this.setState({currenRoute: route});
  }

  updateSpotAuth=(res)=>{
    this.setState({access_token: res.access_token});
    this.setState({spotifyAuth: true});
    console.log(res);
  }

  onSignOut=()=>{
    this.setState({currentUser:{
      name: null,
      email: null,
      avatar: null,
      id: null
    }
  })

  this.setState({isSignedIn: false});
  this.setState({currenRoute: 'signin'});
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

  updateSignedIn = (user)=>{
    this.setState({currentUser:{
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      id: user.id
    },isSignedIn: true});
    console.log(this.state.currentUser);
  }

  

  componentDidMount=()=>{
    
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({isSignedIn: !!user});
      if(this.state.isSignedIn){
        this.setState({currentUser:{
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL
        }});
        Axios.post('http://localhost:3000/google-register',{
          name:user.displayName,
          email:user.email,
          avatar:user.photoURL,
          password:'default'
        })
      }
    })
  }


  render() {



    if(this.state.currenRoute==='signin')
      {
        return (
        <div>
          {
            this.state.isSignedIn && this.state.spotifyAuth ?
            <MainMenu currentUser = {this.state.currentUser} onSignOut={this.onSignOut} access_token={this.state.access_token}/>
            :
            
            <div className="ui container">

                  <div>
                      <video autoPlay muted loop id="myVideo">
                          <source src="./home.mp4" type="video/mp4"/>
                      </video>
                  </div>
                  <div className="ui container" style={{position:'relative',color:'#f1f1f1',marginTop: '30px',maxWidth: '100px'}}>
  
                      <SigninForm onRouteChange = {this.onRouteChange} updateSignedIn={this.updateSignedIn}/>

                      <StyledFirebaseAuth
                          uiConfig={this.uiConfig}
                          firebaseAuth = {firebase.auth()}
                      />
                      <Spotify updateSpotAuth={this.updateSpotAuth}/>
                  </div>
              </div>
          }
        </div>
      );
    }
    else if(this.state.currenRoute === 'register'){
      return(
        <Register onRouteChange={this.onRouteChange}/>
      );
    }
    else{
      return(
        <div>Error!</div>
      );
    }
  }
}

export default SignIn;
