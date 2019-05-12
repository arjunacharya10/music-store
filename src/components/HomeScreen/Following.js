import React from 'react';
import FollowCard from './FollowCard';

const Following=({finfo,updateFollowerSongs})=>{

    const users=finfo.map(user=>{
        return(<FollowCard updateFollowingSongs={updateFollowerSongs} key={user.id} user={user}/>);
    })


    return(
        <div style={{background:'#351C4D'}}>
            <div>{users}</div>
            <div class="ui divider"></div>
        </div>
    );
}

export default Following;