import React, { Component } from 'react';
import {login} from './UserFunctions.Component';
import "../css/styles.css";
import "../css/bootstrap.min.css";

class Login extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if(res){
                this.props.history.push('/profile')
            }
        })
    }
     

    render() {
        return (
            <div className = "bg-white p-2 my-2">
                    <div className = "row">
                        <div className = "col-md-6 mt-5 mx-auto">
                            <form onSubmit={this.onSubmit}>
                                <h1 className="mb-3 font-weight-normal">
                                    <p align="center">Login</p>
                                    <div className="form-group">
                                        <input
                                          type="email"
                                          className="form-control"
                                          name="email"
                                          placeholder="Enter Email"
                                          value = {this.state.email}
                                          onChange = {this.onChange}
                                          required
                                          />
                                    </div>
                                    <div className="form-group">
                                        <input
                                          type="password"
                                          className="form-control"
                                          name="password"
                                          placeholder="Enter Password"
                                          value = {this.state.password}
                                          onChange = {this.onChange}
                                          required
                                          />
                                    </div>
                                    <button type="submit" className="btn btn-lg btn-primary btn-block">Sign In</button>
                                </h1>
                            </form>
                        </div>

                    </div>
                
               
            </div>




        )
    }
}

export default Login;