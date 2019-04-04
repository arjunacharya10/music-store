import React from 'react';
import FollowCard from './FollowCard';

const Following=({finfo,updateFollowerSongs})=>{

    const users=finfo.map(user=>{
        return(<FollowCard updateFollowingSongs={updateFollowerSongs} key={user.ID} user={user}/>);
    })


    return(
        <div>
            <h2 style={{color:'white',padding:'20px'}}>Stories:</h2>
            <div>{users}</div>
            <div class="ui divider"></div>
        </div>
    );
}

export default Following;