import React, { Component } from 'react';
import {register} from './UserFunctions.Component';


class Register extends Component {

    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
        }
        
        
        register(user).then(res => {
            if(res){
                this.props.history.push('/login')
            }
        })
    }
     

    render() {
        return (
            <div className = "bg-white p-2 my-2">
                    <div className = "row">
                        <div className = "col-md-6 mt-5 mx-auto">
                            <form onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3 font-weight-normal">
                                    <p align="center">Create Account</p>
                                    <div className="form-group">
                                        <input
                                          type="text"
                                          className="form-control" required
                                          name="first_name"
                                          placeholder="Enter First Name"
                                          value = {this.state.first_name}
                                          onChange = {this.onChange}
                                          />
                                    </div>
                                    <div className="form-group">
                                        <input
                                          type="text"
                                          className="form-control" required
                                          name="last_name"
                                          placeholder="Enter Last Name"
                                          value = {this.state.last_name}
                                          onChange = {this.onChange}
                                          />
                                    </div>
                                    <div className="form-group">
                                        <input
                                          type="email"
                                          className="form-control" required
                                          name="email"
                                          placeholder="Enter Email"
                                          value = {this.state.email}
                                          onChange = {this.onChange}
                                          />
                                    </div>
                                    <div className="form-group">
                                        <input
                                          type="password"
                                          className="form-control" required
                                          name="password"
                                          placeholder="Enter Password"
                                          value = {this.state.password}
                                          onChange = {this.onChange}
                                          />
                                    </div>
                                    <button type="submit" className="btn btn-lg btn-primary btn-block">Register</button>
                                </h1>
                            </form>
                        </div>

                    </div>
               
            </div>
        )
    }
}

export default Register;