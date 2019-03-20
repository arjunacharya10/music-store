import React from 'react';
import image from './sym7.png';

const HomeButton = ({onRouteChange})=>{
    return(
        <div style={{cursor:'pointer'}} onClick={()=>onRouteChange('home')}>
            <img  className="ui small center circular image" src={image}/>
        </div>

    );
}

export default HomeButton;