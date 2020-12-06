import React from 'react';
import styled from 'styled-components';
//import { Link } from 'react-router-dom';

const AThemes = ({athemes}) => {
    return(
        <MainContainer>
            <div className="">
                <h4>Themes For Adults Birthday Party...</h4><br/>
                {athemes.map((atheme, key) => (
                    <div className="row">
                       <div className="col-md-4">
                           <div className="card mb-4 shadow-sm">
                               <div className="card-body">
                                 <h5>{atheme.ThemeName}</h5>
                                 <p className="card-text">
                                     <strong>Description</strong>: {atheme.Description}
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

export default AThemes;

//main container
const MainContainer = styled.div`
   margin: 7rem 0;
`;
