import React from 'react';
import styled from 'styled-components';

const TFoods = ({tfoods}) => {
    return (
       <MainContainer>
           <div className="">
               <h4>Food Menus For Teenage Birthday Party...</h4><br/>
               {tfoods.map((tfood, key) => (
                   <div className="row">
                       <div className="col-md-4">
                           <div className="card mb-5 shadow-sm">
                               <div className="card-body">
                                   <h5>Food Menu</h5>
                                   <p className="card-text">
                                     <strong>Party Drinks</strong>: {tfood.party_drinks}
                                     <br/>
                                     <strong>Starter</strong>: {tfood.starter}
                                     <br/>
                                     <strong>Main Course</strong>: {tfood.main_course}
                                     <br/>
                                     <strong>Dessert</strong>: {tfood.Dessert}
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

export default TFoods;


//main container
const MainContainer = styled.div`
   margin: 7rem 0;
`;




