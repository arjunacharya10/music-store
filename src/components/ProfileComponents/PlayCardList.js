import React from 'react';
import PlayCard from './PlayCard';

const PlayCardList=({playlists,onRemovePlaylist,onImageClicked})=>{
    const cards = playlists.map(playlist=>{
           return (<PlayCard onImageClicked={onImageClicked} key={playlist.pid} id={playlist.pid} name={playlist.name} image={playlist.image} onRemovePlaylist={onRemovePlaylist}/>);
    })
    return(
        <div style={{overflowX:'scroll',overflowY: 'scroll',height:'100px',width:'500px'}} className="ui" style={{color:'white'}}>
            {cards}
        </div>
    );
}

export default PlayCardList;