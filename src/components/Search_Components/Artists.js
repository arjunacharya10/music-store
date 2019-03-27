import React from 'react';
import Artist from './Artist';
import Spotify from '../apis/spot';
import Albums from './Albums';
import ArtistData from './ArtistData';

class Artists extends React.Component{

    state={
        currentRoute: 'artists',
        albums: [],
        artistImage: '',
        artistName: '',
        artistFollowers: ''
    }

    onBackPressed=()=>{
        this.setState({currentRoute: 'artists'});
    }

    onRouteChange=async (route,id,artistName,artistImage,artistFollowers)=>{
        console.log(this.props);
        await Spotify.get(`artists/${id}/albums`,{

            headers:{
                Authorization: `Bearer ${this.props.access_token}`
            }
        })
        .then(res=>{
            console.log(res);
            this.setState({albums:res.data.items,currentRoute:route,artistName:artistName,artistImage:artistImage,artistFollowers:artistFollowers});
        })
        this.setState({currentRoute: route});
    }

    

    render()
    {
            if(this.state.currentRoute==='artists')
            {
                    const artistCards = this.props.artists.map(artist=>{
                    return(<Artist key={artist.id} artist={artist} onRouteChange={this.onRouteChange}/>)
                });
                if(this.props.artists.length)
                {
                    return(
                        <div className="" style={{color:'white'}}>
                        {artistCards}
                        <br/><br/><br/><br/><br/><br/><br/>
                    </div>
                    );
                }
                else{
                    return(<h2 style={{color: 'grey',marginTop: '30px',textAlign: 'center'}}>No Results Found</h2>);
                }
            }
            else{
                return(
                    <div>
                        <ArtistData setSongUrl={this.props.setSongUrl} purchasedSongs={this.props.purchasedSongs} albums={this.state.albums} access_token={this.props.access_token} updateCart={this.props.updateCart} cart={this.props.cart} onBackPressed={this.onBackPressed} name={this.state.artistName} image={this.state.artistImage} followers={this.state.artistFollowers}/>
                    </div>
                )
            }
    }
}

export default Artists;