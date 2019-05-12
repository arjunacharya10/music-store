import React from 'react';
import axios from 'axios';
import pw from 'password-validator';
//import console = require('console');

class Register extends React.Component{

    state={
        name: '',
        email : '',
        password: ''
    };

    


    onFormSubmit=(event)=>{

        var schema = new pw();

        schema
        .is().min(8)                                    // Minimum length 8
        .is().max(100)                                  // Maximum length 100
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        .has().digits()                                 // Must have digits
        .has().not().spaces()                           // Should not have spaces
        .is().not().oneOf(['Passw0rd', 'Password123']);

        event.preventDefault();

        
        if(schema.validate(this.state.password))

        {
                axios.post('https://online-music-store-server.herokuapp.com/register',{
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                avatar: 'https://api.adorable.io/avatars/285/'+this.state.name
            })
            .then(res=>{
                console.log(res);
                if(res.data==='success'){
                    alert('Registered Successfully! please Signin to continue..')
                    this.props.onRouteChange('signin');
                }
            })
            .catch(err=>{
                alert('User Already exists! Please signin..');
            });
        }
        else{
            window.alert('Password not strong!')
        }
    }

    onNameChange=(event)=>{
        this.setState({name: event.target.value});
    }
    onEmailChange=(event)=>{
        this.setState({email: event.target.value});
    }
    onPasswordChange=(event)=>{
        this.setState({password: event.target.value});
    }




    render(){
        return(
            <div>
            <main class="pa4 black-80 ui">
                        <form class="measure center" onSubmit={this.onFormSubmit}>
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend class="f4 fw6 ph0 mh0">Register</legend>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6">Name</label>
                                <input onChange={this.onNameChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="user-name"/>
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6">Email</label>
                                <input onChange={this.onEmailChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"/>
                            </div>
                            <div class="mv3">
                                <label class="db fw6 lh-copy f6">Password</label>
                                <input onChange={this.onPasswordChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"/>
                            </div>
                            <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                        </fieldset>
                        <div class="">
                            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up"/>
                        </div>
                        <div class="lh-copy mt3">
                            <div onClick={()=>this.props.onRouteChange('signin')} href="#0" class="f6 link dim black db" style={{cursor: 'pointer'}}>Already Registered? Sign In</div>
                        </div>
                        </form>>
                    </main>
        </div>
        );
    }
}

export default Register;