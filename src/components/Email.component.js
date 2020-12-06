import React, { Component } from 'react';
import axios from 'axios';

export default class Email extends Component {
    constructor(props){
        super(props);
        
        this.onChangeEmails = this.onChangeEmails.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            Emails: '',
            Title: '',
            Message: ''
        }
    }

    onChangeEmails(e){
        this.setState({
            Emails: e.target.value
        });
    }

    onChangeTitle(e){
        this.setState({
            Title: e.target.value
        });
    }

    onChangeMessage(e){
        this.setState({
            Message: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const obj = {
            Emails: this.state.Emails,
            Title: this.state.Title,
            Message: this.state.Message
        };


        axios.post('http://localhost:4000/email/sendmail',obj)
          .then(
              res=>console.log(res.data)
              
            );
            window.alert("Invitation is sent successfully");

            this.setState({
                Emails: '',
                Title: '',
                Message: ''
            });
        
    }
    render() {
        return (
            <div className="bg-white p-2 my-2">
                <h3>Send Invitations</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Emails:</label>
                        <textarea  rows="4" cols="50"className="form-control" required
                         value={this.state.Emails}
                         placeholder="ex: abc123@gmail.com , dce321@gmail.com , ....."
                         onChange={this.onChangeEmails}/>
                    </div>
                    <h4>Fill the following details to send Invitation</h4>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" required
                        value={this.state.Title}
                        onChange={this.onChangeTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea  rows="4" cols="50" className="form-control" required
                        value={this.state.Message}
                        onChange={this.onChangeMessage}/>
                    </div>
                    <button className="btn btn-success" type="submit">SEND
                    </button>
                </form>
            </div>
        )
    }
}
