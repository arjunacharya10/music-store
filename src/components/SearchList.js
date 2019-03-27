import React from 'react';
import SearchBar from './SearchBar';
import Spotify from './apis/spot';
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
        tracks: {},
        active:{
            b1: true,
            b2: false,
            b3: false
        }
    };

    onTracksClicked=()=>{
        this.setState({active:{
            b1: true,
            b2: false,
            b3: false
        }});
    }

    onArtistsClicked=()=>{
        this.setState({active:{
            b1: false,
            b2: true,
            b3: false
        }});
    }

    onAlbumsClicked=()=>{
        this.setState({active:{
            b1: false,
            b2: false,
            b3: true
        }});
    }

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
            this.setState({active:{b1:true,b2:false,b3:false}});
            this.setState({artists: data.artists,albums: data.albums,tracks: data.tracks});
            this.setState({currentRoute: 'tracks'});
            console.log(this.state);
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
                        <div style={{content:'center'}}>
                            <SearchMenu tc={this.onTracksClicked} alc={this.onAlbumsClicked} arc={this.onArtistsClicked} onRouteChange={this.onRouteChange} active={this.state.active}/>
                        </div>    
                        <div className="ui">
                            <div style={{overflowY:'scroll',height:'900px',marginRight:'100px',marginLeft:'5px',marginTop:'10px'}}>
                                <Tracks setSongUrl={this.props.setSongUrl} trackItems={this.state.tracks.items} updateCart={this.props.updateCart} cart={this.props.cart} purchasedSongs={this.props.purchasedSongs}/>
                            </div>
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
                    <SearchMenu tc={this.onTracksClicked} alc={this.onAlbumsClicked} arc={this.onArtistsClicked} onRouteChange={this.onRouteChange} active={this.state.active}/>
                    <div style={{overflowY:'scroll',height:'900px',marginRight:'100px',marginLeft:'5px',marginTop:'10px'}}>
                            <Artists setSongUrl={this.props.setSongUrl} artists={this.state.artists.items} access_token={this.props.access_token} updateCart={this.props.updateCart} cart={this.props.cart} purchasedSongs={this.props.purchasedSongs}/>
                        </div>
                    
                </div>
            </div>
        );}
        
        else if(this.state.currentRoute ==='albums')
        {
            return(
                <div className="ui">
                <SearchBar onSubmitForm={this.onSubmitForm}/>
                <div style={{color:'white',align: 'center'}} className="ui">
                    <SearchMenu tc={this.onTracksClicked} alc={this.onAlbumsClicked} arc={this.onArtistsClicked} onRouteChange={this.onRouteChange} active={this.state.active}/>
                    <div style={{overflowY:'scroll',height:'900px',marginRight:'100px',marginTop:'10px'}}>
                            <Albums setSongUrl={this.props.setSongUrl} albums={this.state.albums.items} access_token={this.props.access_token} updateCart={this.props.updateCart} cart={this.props.cart} purchasedSongs={this.props.purchasedSongs}/>
                        </div>
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