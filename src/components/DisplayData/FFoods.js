import React from 'react';
import styled from 'styled-components';

const FFoods = ({ffoods}) => {
    return (
       <MainContainer>
           <div className="">
               <h4>Food Menus For Your Family Get-Together Party...</h4><br/>
               {ffoods.map((ffood, key) => (
                   <div className="row">
                       <div className="col-md-4">
                           <div className="card mb-5 shadow-sm">
                               <div className="card-body">
                                   <h5>Food Menu</h5>
                                   <p className="card-text">
                                     <strong>Welcome Food</strong>: {ffood.welcome_food}
                                     <br/>
                                     <strong>Starter</strong>: {ffood.starter}
                                     <br/>
                                     <strong>Main Course</strong>: {ffood.main_course}
                                     <br/>
                                     <strong>Dessert</strong>: {ffood.Dessert}
                                   </p>
                               </div>
                           </div>
                       </div>
                  </div>
               ))}
           </div>
       </MainContainer>
    )
}

export default FFoods;


//main container
const MainContainer = styled.div`
   margin: 7rem 0;
`;




