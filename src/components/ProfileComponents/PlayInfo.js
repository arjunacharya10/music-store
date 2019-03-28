import React from 'react';
import blank from '../Search_Components/song.png';
import PSongData from './PSongData';
import axios from 'axios';

import SongPlayList from './SongPlayList';

class PlayInfo extends React.Component{

    state={
        currentRoute: 'songlist',
        plsongs:[],
    }
    
    onRouteChange=(route)=>{
        axios.post('http://localhost:3000/get-songs',{
            pid: this.props.pid,
            uid: this.props.uid
        })
        .then(psongs=>{
            var sdata = psongs.data
                    var songs=[];
                    for(var i=0;i<psongs.data.length;i++){
                        var song=[];
                        var curid = sdata[i].sid;
                        for(var j=i;j<sdata.length;j++){
                            if(sdata[j].sid === curid){
                                song.push(sdata[j].name);
                            }
                            else{
                                break;
                            }
                        }
                        i=j-1;
                        songs.push({
                            id: sdata[i].sid,
                            trackName: sdata[i].sname,
                            link: sdata[i].link,
                            image: sdata[i].image,
                            artistNames: song
                        })
                    }
                    console.log(songs);
                    this.setState({plsongs:songs});
                    if(songs.length){
                        this.props.imageUpdater(songs[0].image);
                    }
        })
        .catch(err=>{
            console.log(err);
        })

        this.setState({currentRoute:route});
    }


    componentDidMount=()=>{
        axios.post('http://localhost:3000/get-songs',{
            pid: this.props.pid,
            uid: this.props.uid
        })
        .then(psongs=>{
            var sdata = psongs.data
                    var songs=[];
                    for(var i=0;i<psongs.data.length;i++){
                        var song=[];
                        var curid = sdata[i].sid;
                        for(var j=i;j<sdata.length;j++){
                            if(sdata[j].sid === curid){
                                song.push(sdata[j].name);
                            }
                            else{
                                break;
                            }
                        }
                        i=j-1;
                        songs.push({
                            id: sdata[i].sid,
                            trackName: sdata[i].sname,
                            link: sdata[i].link,
                            image: sdata[i].image,
                            artistNames: song
                        })
                    }
                    console.log(songs);
                    this.setState({plsongs:songs});
                    if(songs.length){
                        this.props.imageUpdater(songs[0].image);
                    }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    componentDidUpdate=()=>{

    }
    
    
    render()
        {
                const allsongs = this.state.plsongs.map(song=>{
                    return (<SongPlayList key={song.id} song={song} setSongUrl={this.props.setSongUrl}/>)
                });


            if(this.state.currentRoute==='songlist')
            {
                console.log(this.state.plsongs)
                return(
                    <div className="ui container center">
                        <div>
                            <i onClick={()=>{this.props.onBackClicked('listdata')}} style={{cursor:'pointer',color:'white'}} className="icon arrow left"/><br/><br/><br/>
                            <img src={this.props.image?this.props.image:blank} className="ui image"></img>
                            <h1 style={{color:'white'}}>{this.props.title}</h1>
                        </div>
                        <div style={{paddingTop:'20px'}}>
                        <h2 onClick={()=>this.onRouteChange('purchased')}  style={{cursor:'pointer',color:'white'}}  >+</h2>
                        <div>
                            {this.state.plsongs.length?allsongs:<h2 style={{color: 'grey',marginTop: '30px',textAlign: 'center'}}>No Playlists Found</h2>}
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
                        </div>
                    </div>
                );
            }
            else{
                return(
                    <div>
                        <i onClick={()=>{this.onRouteChange('songlist')}} style={{cursor:'pointer',color:'white'}} className="icon arrow left"/>
                        <PSongData addSongToPlaylist={this.props.addSongToPlaylist} trackItems={this.props.trackItems} setSongUrl={this.props.setSongUrl}/>
                    </div>
                )
            }
        }
    }


export default PlayInfo;