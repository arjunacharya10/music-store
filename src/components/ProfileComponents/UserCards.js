import React from 'react';

const UserCards =({user,following,onFollow,onUnFollow})=>{

    function kmFormatter(num) {
        return num >=1000 ?num>=1000000?(num/1000000).toFixed(1) + 'M': (num/1000).toFixed(1) + 'K' : num
    }

    var isFollowing=false;
    following.forEach(userid=>{
        if(user.id===userid){
            isFollowing=true;
        }
    });

    var userName=user.name.length>20?user.name.slice(0,17)+'...':user.name;

    if(user)
    {
            return(
            <a style={{color: 'white'}}>
                <div className='tc  dib br3 pa3 ma2'>
                <div className="grow">
                    <img width="300px" height="300px"  src={user.avatar}  alt="robots"/>
                </div>
                <div>
                    <h2>{userName}</h2>
                </div>
                <p style={{color:'grey'}}>{user.email}</p>
                {isFollowing?
                    <button onClick={()=>{onUnFollow(user.id)}} class="ui inverted red button">
                        Unfollow
                    </button>:
                    <button onClick={()=>{onFollow(user.id)}} class="ui inverted blue button">
                        Follow
                    </button>
                }
                </div>
            </a>
        );
    }
    else{
        return(<div></div>);
    }
}

export default UserCards;