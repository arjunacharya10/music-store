import React from 'react';
import blank from '../Search_Components/song.png';

const PlayInfo=({title,image,onBackClicked})=>{


        return(
            <div className="ui container center">
                <div>
                    <i onClick={()=>{onBackClicked('listdata')}} style={{cursor:'pointer',color:'white'}} className="icon arrow left"/><br/><br/><br/>
                    <img src={image?image:blank} className="ui image"></img>
                    <h2 style={{color:'white'}}>{title}</h2>
                </div>
                <div>
                  Song List!
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
                </div>
            </div>
        );
    }


export default PlayInfo;