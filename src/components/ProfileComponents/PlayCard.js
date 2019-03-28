import React from 'react';
import blank from '../Search_Components/song.png';


const PlayCard=({id,name,image,onRemovePlaylist,onImageClicked})=>{
    return(
        <div style={{color:'white'}} className='tc  dib br3 pa3 ma2'>
            <a style={{cursor:'pointer'}} style={{color: 'white'}}>
                <div >
                    <img onClick={()=>{onImageClicked(id,name,image)}}  style={{cursor:'pointer'}} className='tc  dib br3 pa3 ma2 grow' src={image?image:blank}  alt="robots"/>
                    <div>
                        <h2>{name}</h2>  
                    </div>
                    
                </div><br/>
                <p style={{color:'grey',cursor:'pointer'}} onClick={()=>{
                        var res = window.confirm('Are you sure?');
                        console.log(res);
                        if(res){
                            onRemovePlaylist(id);
                        }
                    }} >Remove</p>
            </a>
        </div>
    );
}

export default PlayCard;