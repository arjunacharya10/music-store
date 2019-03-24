import React from 'react';
import Album from './Album';
import Spotify from '../apis/spot';
import AlbumData from './AlbumData';

class Albums extends React.Component{

    state={
        currentRoute: 'albums',
        albumTracks: [],
        albumImage: '',
        title: '',
        artist: ''
       }

    onBackPressed=(route)=>{
        this.setState({currentRoute:route})
    }

    onRouteChange=async (id,route,albumImage,title,artists)=>{
        await Spotify.get(`/albums/${id}/tracks`,{

            headers:{
                Authorization: `Bearer ${this.props.access_token}`
            }
        })
        .then(res=>{
            this.setState({albumTracks: res.data.items,albumImage: albumImage,currentRoute: route,title:title,artist:artists});
            console.log(res);
        })
    }



    render()
    {
            const albumCards = this.props.albums.map(album=>{
            return(<Album key={album.id} album={album} onRouteChange={this.onRouteChange} />);
        });

        if(this.state.currentRoute==='albums')
        {
            if(this.props.albums.length)
            {
                return(
                    <div className="" style={{color:'white'}}>
                    {albumCards}
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
                    <AlbumData onRouteChange={this.onBackPressed} title={this.state.title} artist={this.state.artist} image={this.state.albumImage} albumTracks={this.state.albumTracks} updateCart={this.props.updateCart} cart={this.props.cart}/>
                </div>
            )
        }
    }
}

export default Albums;