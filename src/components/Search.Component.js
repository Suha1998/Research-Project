import React, { Component } from 'react';
import AdultsThemes from './DataFetching/AdultsThemes';
import FamilyFoods from './DataFetching/FamilyFoods';
import KidsFoods from './DataFetching/KidsFoods';
import TeensFoods from './DataFetching/TeensFoods';

export default class Search extends Component {

  constructor(props){
    super(props);

    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeContactNo = this.onChangeContactNo.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeAudience = this.onChangeAudience.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      customer_name: '',
      contact_no: '',
      address: '',
      category: '',
      audience: '',
      result: ''
    }
  }

  onChangeCustomerName(e){
    this.setState({
      customer_name: e.target.value
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

  onChangeCategory(e){
    this.setState({
      category: e.target.value
    });
  }

  onChangeAudience(e){
    this.setState({
      audience: e.target.value
    });
  }

  Search(){
    let result = '';

    if(this.state.category==='birthday' && this.state.audience==='kids'){
        result= <KidsFoods/>
    }

    if(this.state.category==='birthday' && this.state.audience==='teens'){
      result= <TeensFoods/>
    }

    if(this.state.category==='birthday' && this.state.audience==='adults'){
      result= <AdultsThemes/>
    }

    if(this.state.category==='get together' && this.state.audience==='family'){
      result= <FamilyFoods/>
    }

    if(result){
        this.setState({result});
        return false;
    }
    return true;
}

  onSubmit(e){
    e.preventDefault();
    const achieve = this.Search();
    if(achieve){
        alert ("No search results found.")

    this.setState({
      customer_name: '',
      contact_no: '',
      address: '',
      category: '',
      audience: '',
      result: ''
      });
    }
  }
  


    render() {
        return (
            <div className="bg-white">
            <br/><br/>
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                     <h3> Search Plans</h3>
                      <p className="card-text">
                        <form onSubmit={this.onSubmit}>

                          <div className = "form-group">
                            <label>Customer Name:</label>
                            <input type="text" className="form-control" required
                            value={this.state.customer_name}
                            onChange={this.onChangeCustomerName}/>
                          </div>

                          <div className = "form-group">
                            <label>Contact No:</label>
                            <input type="text" className="form-control" required
                            value={this.state.contact_no}
                            onChange={this.onChangeContactNo}/>
                          </div>

                          <div className = "form-group">
                            <label>Address:</label>
                            <input type="text" className="form-control" required
                            value={this.state.address}
                            onChange={this.onChangeAddress}/>
                          </div>

                          <div className = "form-group">
                            <label>Event Category:</label>
                            <input type="text" className="form-control" required
                            value={this.state.category}
                            onChange={this.onChangeCategory}/>
                          </div>

                          <div className = "form-group">
                            <label> Audience of the Event:</label>
                            <input type="text" className="form-control" required
                            value={this.state.audience}
                            onChange={this.onChangeAudience}/>
                          </div>

                          <div className = "form-group">
                          <input type="Submit" value = "Search" 
                          className = "btn btn-dark btn-block"/>
                         </div>
                         
                        </form>
                      </p>
                   </div>
                   <div className="card-footer">
                   {this.state.result}
                   </div>
               </div>
              </div>
             
             
           
        )
    }
}
