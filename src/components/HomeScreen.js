import React from 'react';
import axios from 'axios';
import Following from './HomeScreen/Following';
import Recom from './HomeScreen/Recom';
import Spotify from './apis/spot';
import PurchasedSongs from './ProfileComponents/PurchasedSongs';


class HomeScreen extends React.Component{

    state={
        followerSongs:[],
        finfo:[]
    }

    async componentDidMount(){
        axios.post('http://localhost:3000/get-name',{
            uid: this.props.currentUser.id
        })
        .then(resp=>{
            console.log(resp.data);
            this.setState({finfo:resp.data})
        })
        .catch(err=>{
            console.log(err);
        });
        await Spotify.get('/me/top',{
            headers:{
                Authorization: `Bearer ${this.props.access_token}`
            },
            params:{
                type: 'tracks'
            }
        })
        .then(res=>{
            console.log(res);
        })
    }

    

    render(){
        return(
            <div>
                <div >
                    <Following updateFollowerSongs={this.props.updateFollowerSongs} finfo={this.state.finfo} following={this.props.following}/>
                </div>
                <div style={{width:'1700px'}}>
                    <div>
                    <PurchasedSongs trackItems={this.props.trackItems} setSongUrl={this.props.setSongUrl}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeScreen;