import React, {Component} from 'react';
import axios from 'axios';

export default class Create extends Component{
    
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
               planner_nameError : '',
               party_category : '',
               party_categoryError : '',
               contact_no : '',
               contact_noError : '',
               address : '',
               addressError : '',
               specialities : '',
               specialitiesError : '',
               previous_works : '',
               previous_worksError : ''
        }

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
        });
    }


    validate = () =>{
        let planner_nameError='';
        let  party_categoryError='';
        let contact_noError='';
        let addressError='';
        let specialitiesError='';
        let previous_worksError='';

        
        if (!this.state.planner_name.match(/^[a-zA-Z]+$/))
        {
            planner_nameError = 'Only Letters';
        }

        if (!this.state.party_category.match(/^[a-zA-Z]+$/)){
            party_categoryError = 'Only Letters';
        }

        if (!this.state.contact_no.match(/^[0-9]+$/)){
            contact_noError = 'Invalid value';
        }

        if (planner_nameError || party_categoryError || contact_noError || addressError || specialitiesError || previous_worksError){
            this.setState({planner_nameError, party_categoryError, contact_noError, addressError, specialitiesError, previous_worksError});
            return false;
        }
        return true;
    }

    onSubmit(e){
        e.preventDefault();
        const isValid = this.validate();
        if (isValid){
           
            const obj = {
                planner_name:this.state.planner_name,
                party_category:this.state.party_category,
                contact_no:this.state.contact_no,
                address:this.state.address,
                specialities:this.state.specialities,
                previous_works:this.state.previous_works
            };
    
            axios.post('http://localhost:4000/planner/add', obj)
              .then(res=>console.log(res.data));
             
             //clear Form
              this.setState({
    
                planner_name: '',
                planner_nameError: '',
                party_category: '',
                party_categoryError: '',
                contact_no: '',
                contact_noError: '',
                address: '',
                addressError: '',
                specialities: '',
                specialitiesError: '',
                previous_works: '',
                previous_worksError: ''
    
              });
        }
    }
       


    render()
    {
       return(
            <div className ="container" >
                <div className="card card-head py-2 my-2"><span className="px-1 page-title">Create Your Profile</span></div>
              <div className="card card-body mb-4 p-4">
               <form onSubmit = {this.onSubmit}>
                   <div className = "form-group">
                       <label> Planner Name: </label>
                       <input type="text" className = "form-control" required
                      value = {this.state.planner_name}
                       onChange = {this.onChangePlannerName}/>
                       <span style ={{color:"red"}}>
                           {this.state.planner_nameError}
                       </span>
                   </div>


                   <div className = "form-group">
                       <label>Party Category:</label>
                       <input type="text" className = "form-control" required
                       value = {this.state.party_category}
                       onChange = {this.onChangePartyCategory}/> 
                        <span style ={{color:"red"}}>
                           {this.state.party_categoryError}
                       </span>
                   </div>

                   <div className = "form-group">
                       <label>Contact No: </label>
                       <input type="text" className = "form-control" required
                      value = {this.state.contact_no}
                       onChange = {this.onChangeContactNo} />
                        <span style ={{color:"red"}}>
                           {this.state.contact_noError}
                       </span>
                        
                   </div>

                   <div className = "form-group">
                       <label>Address: </label>
                       <input type="text" className = "form-control" required
                       value = {this.state.address}
                       onChange = {this.onChangeAddress}/> 
                        <span style ={{color:"red"}}>
                           {this.state.addressError}
                       </span>
                   </div>

                   <div className = "form-group">
                       <label>Specialities: </label>
                       <input type="text" 
                       className = "form-control" required
                       value = {this.state.specialities} 
                       onChange = {this.onChangeSpecialities}/> 
                        <span style ={{color:"red"}}>
                           {this.state.specialitiesError}
                       </span>
                   </div>

                   <div className = "form-group">
                       <label>Previous works: </label>
                       <input type="textarea" className = "form-control"
                       value = {this.state.previous_works}
                       onChange = {this.onChangePreviousWorks} /> 
                        <span style ={{color:"red"}}>
                           {this.state.previous_worksError}
                       </span>
                   </div>
                       <div className="card card-footer">
                       <input type="Submit" value = "Create Profile" 
                          className = "btn btn-success"/>
                      </div>
                   
               </form>
            

                     </div>
                   </div>
               
                
           
        );
    }
}

