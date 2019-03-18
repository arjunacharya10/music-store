import React from 'react';
import firebase from 'firebase';
import './MainMenu.css';

const MainMenu = (props)=>{
    return(
        <div className="ui grid">
            <div className="ui row">
                <div class="ui secondary vertical pointing menu two wide column">
                    <a class="item">
                        Home
                    </a>
                    <a class="item">
                        Messages
                    </a>
                    <a class="item active">
                        Friends
                    </a>
                </div>
                <div className="main ten wide column">
                    <span>Signed In!</span><br/>
                    <button onClick={()=>firebase.auth().signOut()}>Sign Out</button>
                    <h1>{props.currentUser?props.currentUser.displayName:null}</h1>
                    <img alt="Profile Picture" src={firebase.auth().currentUser.photoURL} style={{width: '500px',height:'500px'}}/>
                </div>
            </div>
        </div>
    );
}

export default MainMenu;