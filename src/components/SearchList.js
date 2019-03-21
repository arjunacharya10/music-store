import React from 'react';
import SearchBar from './SearchBar';
import Spotify from '../apis/spot';
import SearchMenu from './SearchMenu';
import Tracks from './Search_Components/Tracks';
import Artists from './Search_Components/Artists';
import Albums from './Search_Components/Albums';

class SearchList extends React.Component{


    state={
        term: '',
        currentRoute: '',
        albums: {},
        artists: {},
        tracks: {}
    };

    onSubmitForm=async (term)=>{
        await   Spotify.get('/search',{

            headers:{
                Authorization: `Bearer ${this.props.access_token}`
            },
            params:{
                q: term,
                type: 'album,artist,playlist,track'
            }
        })
        .then(res=>{
            const {data} = res;
            this.setState({currentRoute: 'tracks'});
            this.setState({artists: data.artists,albums: data.albums,tracks: data.tracks});
            console.log(this.state)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    onRouteChange=(route)=>{
        this.setState({currentRoute: route});
    }




    render(){

        if(this.state.currentRoute==='tracks')
        {
            return(
                <div className="ui">
                    <SearchBar onSubmitForm={this.onSubmitForm}/>
                    <div style={{color:'white',align: 'center'}} className="ui">
                        <SearchMenu onRouteChange={this.onRouteChange}/>
                        <div className="ui">
                            <Tracks trackList={this.setState.tracks}/>
                        </div>
                        
                    </div>
                </div>
        );}
        
        else if(this.state.currentRoute==='artists')
        {
            return(
                <div className="ui">
                <SearchBar onSubmitForm={this.onSubmitForm}/>
                <div style={{color:'white',align: 'center'}} className="ui">
                    <SearchMenu onRouteChange={this.onRouteChange}/>
                            <Artists/>
                    
                </div>
            </div>
        );}
        
        else if(this.state.currentRoute ==='albums')
        {
            return(
                <div className="ui">
                <SearchBar onSubmitForm={this.onSubmitForm}/>
                <div style={{color:'white',align: 'center'}} className="ui">
                    <SearchMenu onRouteChange={this.onRouteChange}/>
                    
                            <Albums/>
                
                </div>
            </div>
        );}

        else{
            return(
                <div className="ui">
                    <SearchBar onSubmitForm={this.onSubmitForm}/>
                    <h2 style={{color: 'grey',marginTop: '30px',textAlign: 'center'}}>Your Search Result will Appear Here..</h2>
                </div>
            );
        }
    }
}

export default SearchList;