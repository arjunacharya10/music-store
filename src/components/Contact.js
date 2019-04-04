import React from 'react';
import axios from 'axios';


class Contact extends React.Component{
    
    state={
        subject:'',
        message:''
    }

    onSubChange=(event)=>{
        this.setState({subject:event.target.value});
    }

    onMesChange=(event)=>{
        this.setState({message:event.target.value})
    }

    onMessageSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/feedback',{
            uid:this.props.currentUser.id,
            subject:this.state.subject,
            message:this.state.message
        })
        .then(resp=>{
            this.setState({subject:'',message:''});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    
    render()
    {return(
        <div style={{paddingTop:'100px'}} className="ui container">
            <p style={{color:'white'}}><strong>Share</strong> Your thoughts!</p>
                        <form onSubmit={this.onMessageSubmit}>
                        <p><input onChange={this.onSubChange} value={this.state.subject} class="w3-input w3-padding-16 w3-border" type="text" placeholder="Subject" required name="Name"/></p>
                        <p><input onChange={this.onMesChange} value={this.state.message} class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message"/></p>
                        <p><button class="w3-button w3-black" type="submit">SEND MESSAGE</button></p>
                        </form>
                        <br/><br/><br/>
        </div>
    );}
}

export default Contact;