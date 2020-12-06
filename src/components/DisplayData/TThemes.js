import React from 'react';
import styled from 'styled-components';
//import { Link } from 'react-router-dom';

const TThemes = ({tthemes}) => {
    return(
        <MainContainer>
            <div className="">
                <h4>Themes For Teenage Birthday Party...</h4><br/>
                {tthemes.map((ttheme, key) => (
                    <div className="row">
                       <div className="col-md-4">
                           <div className="card mb-4 shadow-sm">
                               <div className="card-body">
                                 <h5>{ttheme.ThemeName}</h5>
                                 <p className="card-text">
                                     <strong>Description</strong>: {ttheme.Description}
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

export default TThemes;

//main container
const MainContainer = styled.div`
   margin: 7rem 0;
`;
