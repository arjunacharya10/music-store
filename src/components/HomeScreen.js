import React from 'react';
import axios from 'axios'

class HomeScreen extends React.Component{

    state={
        followerSongs:[]
    }

    componentDidMount(){
        axios.post('http://localhost:3000/get-follower-songs',{
            uid: this.props.userId
        })
        .then(d=>{
            console.log(d.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div style={{color:'white'}}>Home Screen!</div>
        );
    }
}

export default HomeScreen;