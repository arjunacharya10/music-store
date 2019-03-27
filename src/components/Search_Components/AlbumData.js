import React from 'react';
import Track from './Track';
import blank from './blank.png';
import TrackList from './TrackList'

const AlbumData=({onRouteChange,title,artist,image,albumTracks,updateCart,cart,purchasedSongs,setSongUrl})=>{

    if(albumTracks)
    {
            const songs = albumTracks.map(song=>{
                return (<TrackList setSongUrl={setSongUrl} key={song.id} image={image} song={song} updateCart={updateCart} cart={cart} purchasedSongs={purchasedSongs}/>);
            })


        return(
            <div className="ui container center">
                <div >
                    <i style={{cursor:'pointer'}} onClick={()=>onRouteChange('albums')} className="icon arrow left"/><br/><br/><br/>
                    <img src={image} className="ui medium image"></img>
                    <h3>{title}</h3>
                    <span style={{color:'grey'}}>{artist}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Songs:&nbsp;&nbsp;&nbsp;{albumTracks.length}</span>
                    
                </div>
                <div>
                  {songs}
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
                </div>
            </div>
        );
    }
}

export default AlbumData;