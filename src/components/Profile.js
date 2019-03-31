import React from 'react';
import './Profile.css';
import ProfileTop from './ProfileComponents/ProfileTop';
import ReactPlayer from 'react-player';
import Playlists from './ProfileComponents/Playlists';
import PurchasedSongs from './ProfileComponents/PurchasedSongs';
import SearchUsers from './ProfileComponents/SearchUsers';
import axios from 'axios';

class Profile extends React.Component {

    state={
        currentRoute:'profile',
        clicked:false,
        users: '',
        followers: this.props.followersId,
        following: this.props.followingId
    }

    onRouteChange=(route)=>{
        this.setState({clicked:!this.state.clicked,currentRoute:route});
    }

    componentDidMount(){
        axios.post('http://localhost:3000/users',{
            id:this.props.currentUser.id
        })
        .then(data=>{
            this.setState({users:data.data});
        })
        .catch(err=>{
            console.log(err);
        })
    }

    onFollow=(folid)=>{
        axios.post('http://localhost:3000/follow',{
            uid:this.props.currentUser.id,
            fid:folid
        })
        .then(resp=>{
            const {fing,fers} = resp.data;
            this.setState({following:fing,followers:fers});
            this.props.updateFollowing(fing,fers);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    onUnFollow=(folid)=>{
        axios.post('http://localhost:3000/un-follow',{
            uid:this.props.currentUser.id,
            fid:folid
        })
        .then(resp=>{
            const {fing,fers} = resp.data;
            this.setState({following:fing,followers:fers});
            this.props.updateFollowing(fing,fers);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render()
    {
        return(
            <div>
            <i onClick={()=>{if(!this.state.clicked){this.onRouteChange('search');}else{this.onRouteChange('profile')}}} className={this.state.clicked?"icon arrow circle left":"icon search"} style={{margin:'20px',cursor:'pointer',color:'white'}}>&nbsp;{this.state.clicked?"":"Users"}</i>
            <div className="ui container">
               {
                   this.state.currentRoute==='profile'?
                    <div>
                        <ProfileTop following={this.state.following.length} followers={this.state.followers.length} currentUser={this.props.currentUser}/>
                        <Playlists trackItems={this.props.trackItems} setSongUrl={this.props.setSongUrl} currentUser={this.props.currentUser}/>
                        <h2 style={{color:'white'}}>Purchased Songs:</h2>
                        <PurchasedSongs trackItems={this.props.trackItems} setSongUrl={this.props.setSongUrl}/>
                    </div>    
                :
                    <SearchUsers onUnFollow={this.onUnFollow} onFollow={this.onFollow} following={this.state.following} users={this.state.users}/>
                }
            </div>
        </div>
        );
    }
}

export default Profile;