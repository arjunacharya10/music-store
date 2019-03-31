import React from 'react';
import UserCards from './UserCards';

const UserList =({users,following,onFollow,onUnFollow})=>{
    const userCards = users.map(user=>{
        return(<UserCards onUnFollow={onUnFollow} onFollow={onFollow} key={user.id} user={user} following={following}/>);
    });


    return(
        <div style={{overflowY:'scroll',height:'900px'}}>
            {userCards}
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default UserList;