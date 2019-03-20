import React from 'react';
import firebase from 'firebase';
import './MainMenu.css';
import HomeLogo from './HomeButton';
import HomeMain from './HomeMain';
import Profile from './Profile';
import SideNav from './SideNav';
import HomeScreen from './HomeScreen';
import FooterBar from './FooterBar';

class MainMenu extends React.Component{

    state={
        currentRoute: 'home',
        curUser: firebase.auth().currentUser
    };
    onRouteChange = (route)=>{
        this.setState({currentRoute: route});
    }
    
    
    render()
    {
        if(this.state.currentRoute==='profile')
        {
            return(
                <div>
                    <SideNav onRouteChange={this.onRouteChange} curUser={this.state.curUser}/>
                        <div className="main">
                            <Profile/>
                        </div>
                        <div class="footer">
                            <p>Footer</p>
                        </div>
                </div>
            );
        }
        else if(this.state.currentRoute==='home'){
            return(
                <div>
                    <SideNav onRouteChange={this.onRouteChange} curUser={this.state.curUser}/>
                        <div className="main">
                            <HomeScreen/>
                        </div>
                        <div class="footer">
                            <p>Footer</p>
                        </div>
                </div>
            );

        }
        else{
            return(
                <div></div>
            );
        }
    }
}

export default MainMenu;















/*return(
            <div>
                        <div className="ui visible inverted left verticle sidebar sidenav" style={{background: 'black'}}>
                            <HomeLogo/><br/><br/>
                            <a href="#"><i className="icon home">&nbsp;&nbsp;Home</i></a><br/>
                            <a href="#"><i className="icon search">&nbsp;&nbsp;Search</i></a><br/>
                            <a href="#"><i className="icon server">&nbsp;&nbsp;Library</i></a><br/>
                            <div className="line"></div>
                        </div>
                        <div className="ui verticle main" style={{background: 'linear-gradient(to left , #0e4424 , #222222)',marginLeft:'250px'}}>
                            <span>Signed In!</span><br/>
                            <button onClick={()=>firebase.auth().signOut()}>Sign Out</button>
                            <h1>{props.currentUser?props.currentUser.displayName:null}</h1>
                            <img alt="Profile Picture" src={firebase.auth().currentUser.photoURL} style={{width: '500px',height:'500px'}}/>
                        </div>
                    
            </div>
    );*/