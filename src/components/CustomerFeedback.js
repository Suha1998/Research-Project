import React, { Component } from 'react';
import axios from 'axios';
import Feedback from './Feedback';

export default class CustomerFeedback extends Component {
    
    constructor(props){
        super(props);
        this.state = {rating : [] };
    }

    componentDidMount(){
        axios.get('http://localhost:4000/rating')
         .then(response => {
             this.setState({rating:response.data});
         })
         .catch(function(error){
             console.log(error);
         });
    }

    tabRow(){
        return this.state.rating.map(function(object, i){
            return <Feedback obj = {object} key = {i}/>
        });
    }


    render() {
        return (
            <div className="container-form bg-white mt-2 pt-2">
              <h3 className = "text-center">Customer Feedback</h3>
              <table className = "table table-striped" style = {{marginTop:20}}>
                <thead>
                    <tr>
                        <th>Planner Name</th>
                        <th>Comment</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
              </table>
            </div>
        )
    }
}
