import React from 'react';
import Albums from './Albums';


const ArtistData=({albums,access_token,updateCart,cart,onBackPressed,image,name,followers,purchasedSongs})=>{
    return(
        <div className="ui">
                <div className="ui container center">
                    <i style={{cursor:'pointer'}} onClick={()=>onBackPressed()} className="icon arrow left"/><br/><br/><br/>
                    <img src={image} className="ui medium image"></img>
                    <h3>{name}</h3>
                    <span style={{color:'grey'}}>Followers: &nbsp;{followers}</span>
                    
                </div>
                <div class="ui divider"></div>
                <div>
                <Albums albums={albums} access_token={access_token} updateCart={updateCart} cart={cart} purchasedSongs={purchasedSongs}/>
                </div>  
        </div>
    );
}

export default ArtistData;