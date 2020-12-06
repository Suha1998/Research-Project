import React from 'react';
import styled from 'styled-components';

const KFoods = ({kfoods}) => {
    return (
       <MainContainer>
           <div className="">
               <h4>Food Menus For Your Kids Birthday Party...</h4><br/>
               {kfoods.map((kfood, key) => (
                   <div className="row">
                       <div className="col-md-4">
                           <div className="card mb-5 shadow-sm">
                               <div className="card-body">
                                   <h5>Food Menu</h5>
                                   <p className="card-text">
                                     <strong>Party Drinks</strong>: {kfood.party_drinks}
                                     <br/>
                                     <strong>Starter</strong>: {kfood.starter}
                                     <br/>
                                     <strong>Main Course</strong>: {kfood.main_course}
                                     <br/>
                                     <strong>Dessert</strong>: {kfood.Dessert}
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

export default KFoods;


//main container
const MainContainer = styled.div`
   margin: 7rem 0;
`;




