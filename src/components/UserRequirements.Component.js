import React, {Component} from 'react';

export default class UserRequirements extends Component{
    
    render(){
        return(
            
            <div className ="container" >
              <div class="main">
                <div class="signup">
                  <div class="container">
                    <div class="signup-content">
                     <h3> Provide Your Requirements for the Event</h3>
                     <br/> 
                    
                     <form>
                      
                     <div className = "form-group"> 
                       <label> Name: </label>
                       <input type="text" className = "form-control"/>
                   
                   </div>
                    
                   <div className = "form-group"> 
                       <label> Contact No: </label>
                       <input type="text" className = "form-control"/>
                   
                   </div>

                   <div className = "form-group">
                       <label>Party Category:</label>
                       <select>
                         <option selected value="birthday">Birthday</option>
                         <option value="farewell">Fair-well Party</option>
                         <option value="gettogether">Get Together</option>
                         <option value="batchparty">Batch Party</option>
                         <option value="other">Other</option>
                       </select> 
                        
                   </div>

                  
                   <div className = "form-group">
                       <label>Audience: </label>
                       <select>
                         <option selected value="kids">Kids</option>
                         <option value="adults">Adults</option>
                         <option value="gents">Gents</option>
                         <option value="ladies">Ladies</option>
                         <option value="family">Family</option>
                       </select> 
                        
                   </div>

                   <div className = "form-group">
                       <label>No of Guests: </label>
                       <input type="text" className = "form-control"/> 
                        
                   </div>

                   <div className = "form-group">
                       <label>Decorations: </label>
                       <div className="radio">
                          <label>
                             <input type="radio" value="yes" />
                               Yes
                          </label>
                        </div>
                          <div className="radio">
                         <label>
                          <input type="radio" value="no" />
                            No
                         </label>
                     </div> 
                   </div>

                   <div className = "form-group">
                       <label>Liquor: </label>
                       <div className="radio">
                          <label>
                             <input type="radio" value="yes" />
                               Yes
                          </label>
                        </div>
                          <div className="radio">
                         <label>
                          <input type="radio" value="no" />
                            No
                         </label>
                     </div> 
                        
                   </div>

                   <div className = "form-group">
                       <label>Location: </label>
                       <div className="radio">
                          <label>
                             <input type="radio" value="indoor" />
                               Indoor
                          </label>
                        </div>
                          <div className="radio">
                         <label>
                          <input type="radio" value="outdoor" />
                            Outdoor
                         </label>
                     </div>  
                        
                   </div>

                   <div className = "form-group">
                       <label>Any special requirements: </label>
                       <input type="textarea" className = "form-control"/> 
                        
                   </div>

                   <div className = "form-group">
                       <input type="Submit" value = "Find A Plan" 
                          className = "btn btn-primary"/>
                      </div>    

                      <div className = "form-group">
                         <input type="Submit" value = "Reset" 
                          className = "btn btn-primary"/>
                      </div> 
                        
                   
               </form>
            

                     </div>
                   </div>
               </div>
              </div>
          </div>
                
           
        );
    }
}