import React from 'react';
import HomeLogo from './HomeButton';
import firebase from 'firebase';

class SideNav extends React.Component{

    state={
        active:{
            b1: true,
            b2: false,
            b3: false,
            b4: false,
            b5: false,
            b6: false
        }
    };

    onHomeClick=()=>{
        this.setState({active:{
            b1: true,
            b2: false,
            b3: false,
            b4: false,
            b5: false,
            b6: false
        }});
    }
    onSearchClick=()=>{
        this.setState({active:{
            b1: false,
            b2: true,
            b3: false,
            b4: false,
            b5: false,
            b6: false
        }});
    }
    onLibClick=()=>{
        this.setState({active:{
            b1: false,
            b2: false,
            b3: true,
            b4: false,
            b5: false,
            b6: false
        }});
    }
    onAboutClick=()=>{
        this.setState({active:{
            b1: false,
            b2: false,
            b3: false,
            b4: true,
            b5: false,
            b6: false
        }});
    }
    onContactClick=()=>{
        this.setState({active:{
            b1: false,
            b2: false,
            b3: false,
            b4: false,
            b5: true,
            b6: false
        }});
    }
    onProfileClick=()=>{
        this.setState({active:{
            b1: false,
            b2: false,
            b3: false,
            b4: false,
            b5: false,
            b6: true
        }});
    }
    


    render()
    {
            return(
            <div style={{cursor:'pointer'}} className="sidenav" style={{fontFamily: '\'Lato\', sans-serif'}}>
                        <HomeLogo onRouteChange={this.props.onRouteChange}/><br/><br/>
                        <a style={this.state.active.b1?{color: '#ffffff',fontFamily: '\'Lato\', sans-serif'}:{color:'#818181',fontFamily: '\'Lato\', sans-serif'}} onClick={()=>{this.onHomeClick();this.props.onRouteChange('home');}} href="#"><i className="icon home">&nbsp;&nbsp;Home</i></a><br/>
                        <a style={this.state.active.b2?{color: '#ffffff',fontFamily: '\'Lato\', sans-serif'}:{color:'#818181',fontFamily: '\'Lato\', sans-serif'}} onClick={()=>{this.onSearchClick();this.props.onRouteChange('search');}} href="#"><i className="icon search">&nbsp;&nbsp;Search</i></a><br/>
                        <a style={this.state.active.b3?{color: '#ffffff',fontFamily: '\'Lato\', sans-serif'}:{color:'#818181',fontFamily: '\'Lato\', sans-serif'}} onClick={()=>{this.onLibClick();this.props.onRouteChange('cart');}} href="#"><i className="icon cart">&nbsp;&nbsp;Cart</i></a><br/>
                        
                        <div className="line"></div>
                        <a style={this.state.active.b4?{color: '#ffffff',fontFamily: '\'Lato\', sans-serif'}:{color:'#818181',fontFamily: '\'Lato\', sans-serif'}} onClick={()=>{this.onAboutClick();this.props.onRouteChange('about');}} style={{marginTop: '200px'}} href="#"><i className="icon">&nbsp;&nbsp;About</i></a><br/>
                        <a style={this.state.active.b5?{color: '#ffffff',fontFamily: '\'Lato\', sans-serif'}:{color:'#818181',fontFamily: '\'Lato\', sans-serif'}} onClick={()=>{this.onContactClick();this.props.onRouteChange('contact');}} href="#"><i className="icon">&nbsp;&nbsp;Contact</i></a><br/><br/><br/>
                        <a style={this.state.active.b6?{color: '#ffffff',fontFamily: '\'Lato\', sans-serif'}:{color:'#818181',fontFamily: '\'Lato\', sans-serif'}} onClick={()=>{this.onProfileClick();this.props.onRouteChange('profile');}} href="#"><img className="ui mini avatar image" src={this.props.currentUser.avatar}/>&nbsp;&nbsp;{this.props.currentUser.name}</a><br/><br/><br/>
                        <div className="signout" onClick={()=>{
                            var res = window.confirm('Are you sure?');
                            if(res){
                                firebase.auth().signOut();
                                this.props.onSignOut();
                            }
                            }}>Sign Out</div>
                    </div>
        );
    }
}


/*var res = window.confirm('Are you sure?');
                        if(res){
                            firebase.auth().signOut();
                            <a style={this.state.active.b5?{color: '#ffffff',fontFamily: '\'Lato\', sans-serif'}:{color:'#818181',fontFamily: '\'Lato\', sans-serif'}} href="#"><i className="icon">&nbsp;&nbsp;Contact</i></a><br/><br/><br/>
                        }*/
export default SideNav;