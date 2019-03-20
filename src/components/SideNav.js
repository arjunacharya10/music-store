import React from 'react';
import HomeLogo from './HomeButton';
import firebase from 'firebase';

const SideNav = (props)=>{
    return(
        <div className="sidenav" style={{fontFamily: '\'Singlet\',cursive'}}>
                    <HomeLogo onRouteChange={props.onRouteChange}/><br/><br/>
                    <a onClick={()=>props.onRouteChange('home')} href="#"><i className="icon home">&nbsp;&nbsp;Home</i></a><br/>
                    <a href="#"><i className="icon search">&nbsp;&nbsp;Search</i></a><br/>
                    <a onClick={()=>props.onRouteChange('home')} href="#"><i className="icon server">&nbsp;&nbsp;Library</i></a><br/>
                    
                    <div className="line"></div>
                    <a style={{marginTop: '300px'}} href="#"><i className="icon">&nbsp;&nbsp;About</i></a><br/>
                    <a href="#"><i className="icon">&nbsp;&nbsp;Contact</i></a><br/><br/><br/>
                    <a href="#" onClick={()=>props.onRouteChange('profile')}><img className="ui mini avatar image" src={props.currentUser.avatar}/>&nbsp;&nbsp;{props.currentUser.name}</a><br/>
                    <div className="signout" onClick={()=>{
                        var res = window.confirm('Are you sure?');
                        if(res){
                            firebase.auth().signOut();
                            props.onSignOut();
                        }
                        }}>Sign Out</div>
                </div>
    );
}


/*var res = window.confirm('Are you sure?');
                        if(res){
                            firebase.auth().signOut();
                        }*/
export default SideNav;