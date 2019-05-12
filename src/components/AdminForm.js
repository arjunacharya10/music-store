import React from 'react';
import axios from 'axios';

class AdminForm extends React.Component{
    state={
        email:'',
        password:'',
        songs:[]
    }

    onEmailChange=(event)=>{
        this.setState({email:event.target.value});
    }
    onPasswordChange=(event)=>{
        this.setState({password:event.target.value});
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/admin',{
            email:this.state.email,
            password:this.state.password
        })
        .then(resp =>{
            this.props.onRouteChange('adminmain');
            axios.get('http://localhost:3000/allsongs')
            .then(songl=>{
                this.props.updateAllSongs(songl.data);
            })
            alert("Success!!");
        })
        .catch(err=>{
            alert("Email/Password doesnt match");
        })
    }

    render(){
        return(
            <div>
                <main class="pa4 black-80 ui">
                            <form class="measure center" onSubmit={this.onFormSubmit}>
                            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                                <legend class="f4 fw6 ph0 mh0">Admin Sign In</legend>
                                <div class="mt3">
                                    <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                                    <input onChange={this.onEmailChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                                </div>
                                <div class="mv3">
                                    <label class="db fw6 lh-copy f6" for="password">Password</label>
                                    <input onChange={this.onPasswordChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                                </div>
                                <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                            </fieldset>
                            <div class="">
                                <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                            </div>
                            <div class="lh-copy mt3">
                                <div onClick={()=>this.props.onRouteChange('register')} href="#0" class="f6 link dim black db" style={{cursor: 'pointer'}}>Sign up</div>
                                <div style={{cursor:'pointer'}} onClick={()=>this.props.onRouteChange('signin')}>Not admin? Signin</div>
                            </div>
                            </form>
                        </main>
            </div>
        );
    }
}

export default AdminForm;