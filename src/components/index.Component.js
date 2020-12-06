import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class index extends Component{

    constructor(props){
        super(props);
        this.state = {planner : [] };
    }

    componentDidMount(){
        axios.get('http://localhost:4000/planner')
         .then(response => {
             this.setState({planner:response.data});
         })
         .catch(function(error){
             console.log(error);
         });
    }

    tabRow(){
        return this.state.planner.map(function(object, i){
            return <TableRow obj = {object} key = {i}/>
        });
    }

    render(){
        return(
            <div className="container-form bg-white mt-2 pt-2">
              <h3 className = "text-center">Planners List</h3>
              <table className = "table table-striped" style = {{marginTop:20}}>
                <thead>
                    <tr>
                        <th>Planner Name</th>
                        <th>Party Category</th>
                        <th>Contact No</th>
                        <th>Address</th>
                        <th>Specialities</th>
                        <th>Previous Work</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
              </table>
            </div>
        );
    }
}