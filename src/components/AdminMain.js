import React from 'react';
import axios from 'axios';
class AdminMain extends React.Component{
    state={
        songl:[]
    }
    

    componentDidMount(){
        axios.get('https://online-music-store-server.herokuapp.com/allsongs')
    .then(songs=>{
        this.setState({songl:songs.data});
    });
    }

    render(){
        console.log(this.state.songl);
        const songTab = this.state.songl.map(song=>{
            return(
                <tr>
                    <td>{song.sid}</td>
                    <td>{song.sname}</td>
                    <td><img src={song.image}/></td>
                    <td>{song.link}</td>
                </tr>
            )
        })
        return(
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Link</th>
                    </tr>
                    {songTab}
                </table>
            </div>
        )
    }
}

export default AdminMain;