import React from 'react';
import './Profile.css';
import ProfileTop from './ProfileComponents/ProfileTop';
import ReactPlayer from 'react-player';
import Playlists from './ProfileComponents/Playlists';
import PurchasedSongs from './ProfileComponents/PurchasedSongs';

const Profile = (props)=>{
    return(
        /*<div className="ui container center">
            <h1 style={{marginTop: '20px',color: 'white'}}>Welcome {firebase.auth().currentUser?firebase.auth().currentUser.displayName:null}</h1>
        </div>*/
        <div className="ui container">
            <ProfileTop currentUser={props.currentUser}/>
            <Playlists/>
            <PurchasedSongs trackItems={props.trackItems} setSongUrl={props.setSongUrl}/>
        </div>

    );
}

export default Profile;