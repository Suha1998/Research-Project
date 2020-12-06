import React, { Component } from 'react';
import axios from 'axios';

export default class Rating extends Component {

    constructor(props){
        super(props);
        //this.state = {planners : [] };

        this.onChangePlannerId = this.onChangePlannerId.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeRate = this.onChangeRate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
               planners : [] ,
               PlannerId : '',
               Comment : '',
               Date : '',
               Rate : ''
               
        }
    }

    onChangePlannerId(e){
        this.setState({
            PlannerId: e.target.value
        });
    }

    onChangeComment(e){
        this.setState({
            Comment: e.target.value
        });
    }

    onChangeDate(e){
        this.setState({
            Date: e.target.value
        });
    }

    onChangeRate(e){
        this.setState({
            Rate: e.target.value
        });
    }

   

    componentDidMount(){
        axios.get('http://localhost:4000/planner')
         .then(response => {
            let planners = response.data.map(planner => {
              return {value: planner._id, display: planner.planner_name}
            });
            this.setState({
              planners: [{value: '', display: '(Select your favourite planner)'}].concat(planners)
            });
         })
         .catch(function(error){
             console.log(error);
         });
    }

    onSubmit(e){
        e.preventDefault();
           
            const obj = {
                PlannerId:this.state.PlannerId,
                Comment:this.state.Comment,
                Date:this.state.Date,
                Rate:this.state.Rate
            };
    
            axios.post('http://localhost:4000/rating/add', obj)
              .then(res=>console.log(res.data));
             
             //clear Form
              this.setState({
  
                PlannerId : '',
                Comment : '',
                Date : '',
                Rate : ''
              });
        
    }

    

    render() {
        return (
            <div className="bg-white p-2 my-2">
                <h3>Rate Your Favourite Planners......</h3>
                 <form onSubmit={this.onSubmit}>
                     <div className="form-group">
                     <select className="form-control" value={this.state.PlannerId} onChange={this.onChangePlannerId}>
        {this.state.planners.map((planner) => <option key={planner.value} value={planner.value}>{planner.display}</option>)}
      </select>
                     </div>
                     <div className="form-group">
                         <label>Comment:</label>
                         <textarea  rows="4" cols="50" className="form-control" required
                         value={this.state.Comment}
                         onChange={this.onChangeComment}/>
                     </div>
                     <div className="form-group">
                         <label>Date:</label>
                         <input type="text" placeholder="DD/MM/YYYY"
                         className="form-control col-3" required
                         value={this.state.Date}
                         onChange={this.onChangeDate}/>
                     </div>
                     <div className="form-group">
                         <label>Rate:</label><br/>
                         <select className="form-control col-3" required 
                         value={this.state.Rate}
                         onChange={this.onChangeRate}>
                            <option value="1">1 ★ </option>
                            <option value="2">2 ★ ★ </option>
                            <option value="3">3 ★ ★ ★ </option>
                            <option value="4">4 ★ ★ ★ ★ </option>
                            <option value="5">5 ★ ★ ★ ★ ★ </option>
                         </select>
                     </div>
                     <div className="form-group">
                         <button className="btn btn-success" type="submit">
                             Submit
                         </button>
                     </div>
                 </form>
            </div>
        )
    }
}
