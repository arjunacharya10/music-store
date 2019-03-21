import React from 'react';
import SpotifyLogin from 'react-spotify-login';
import { clientId, redirectUri } from './settings';


const Spotify =(props)=>{


const onSuccess = res=>{console.log(res);props.updateSpotAuth(res);}
const onFailure = res=> console.log(res);
    
return(
        <div>
            <SpotifyLogin 
            clientId={clientId}
            redirectUri={redirectUri}
            onSuccess={onSuccess}
            onFailure={onFailure}
            scope="user-read-private"
            buttonText = "Authorise"/>
        </div>
    );
}

export default Spotify;