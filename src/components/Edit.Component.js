import React, {Component} from 'react';

import axios from 'axios';
import { render } from '@testing-library/react';

export default class Edit extends Component{
     constructor(props){
         super(props);
         this.onChangePlannerName = this.onChangePlannerName.bind(this);
         this.onChangePartyCategory = this.onChangePartyCategory.bind(this);
         this.onChangeContactNo = this.onChangeContactNo.bind(this);
         this.onChangeAddress = this.onChangeAddress.bind(this);
         this.onChangeSpecialities = this.onChangeSpecialities.bind(this);
         this.onChangePreviousWorks = this.onChangePreviousWorks.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

         this.state = {
            planner_name : '',
            party_category : '',
            contact_no : '',
            address : '',
            specialities : '',
            previous_works : ''
         }
     }

     componentDidMount(){
         axios.get('http://localhost:4000/planner/edit'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    planner_name: response.data.planner_name,
                    party_category: response.data.party_category,
                    contact_no: response.data.contact_no,
                    address: response.data.address,
                    specialities: response.data.specialities,
                    previous_works: response.data.previous_works
                    
                });
            })
            .catch(function (error){
                console.log(error);
            })
     }

     onChangePlannerName(e){
         this.setState({
             planner_name: e.target.value
         });
     }

     onChangePartyCategory(e){
         this.setState({
             party_category: e.target.value
         });
     }

     onChangeContactNo(e){
         this.setState({
             contact_no: e.target.value
         });
     }

     onChangeAddress(e){
         this.setState({
             address: e.target.value
         });
     }

     onChangeSpecialities(e){
         this.setState({
             specialities: e.target.value
         });
     }

     onChangePreviousWorks(e){
         this.setState({
             previous_works: e.target.value
         })
     }

     onSubmit(e){
         e.preventDefault();
         const obj = {
             planner_name: this.state.planner_name,
             party_category: this.state.party_category,
             contact_no: this.state.contact_no,
             address: this.state.address,
             specialities: this.state.specialities,
             previous_works: this.state.previous_works
         };
         axios.post('http://localhost:4000/planner/update'+this.props.match.params.id,obj)
           .then(res => console.log(res.data));

         this.props.history.push('/index');
     }

render(){

    return (
        <div>

        </div>
    )
 }
}