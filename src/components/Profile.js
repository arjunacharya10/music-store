import React from 'react';
import './Profile.css';
import ProfileTop from './ProfileComponents/ProfileTop';
import ReactPlayer from 'react-player';
import Playlists from './ProfileComponents/Playlists';
import PurchasedSongs from './ProfileComponents/PurchasedSongs';
import SearchUsers from './ProfileComponents/SearchUsers';

class Profile extends React.Component {

    state={
        currentRoute:'profile',
        clicked:false
    }

    onRouteChange=(route)=>{
        this.setState({clicked:!this.state.clicked,currentRoute:route});
    }

    componentDidMount(){
        
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
                        <ProfileTop currentUser={this.props.currentUser}/>
                        <Playlists trackItems={this.props.trackItems} setSongUrl={this.props.setSongUrl} currentUser={this.props.currentUser}/>
                        <h2 style={{color:'white'}}>Purchased Songs:</h2>
                        <PurchasedSongs trackItems={this.props.trackItems} setSongUrl={this.props.setSongUrl}/>
                    </div>    
                :
                    <SearchUsers/>
                }
            </div>
        </div>
        );
    }
}

export default Profile;