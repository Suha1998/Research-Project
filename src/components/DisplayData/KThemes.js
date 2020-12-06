import React from 'react';
import styled from 'styled-components';
//import { Link } from 'react-router-dom';

const KThemes = ({kthemes}) => {
    return(
        <MainContainer>
            <div className="">
                <h4>Themes For Your Kids Birthday Party...</h4><br/>
                {kthemes.map((ktheme, key) => (
                    <div className="row">
                       <div className="col-md-4">
                           <div className="card mb-4 shadow-sm">
                               <div className="card-body">
                                 <h5>{ktheme.ThemeName}</h5>
                                 <p className="card-text">
                                     <strong>Description</strong>: {ktheme.Description}
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

export default KThemes;

//main container
const MainContainer = styled.div`
   margin: 7rem 0;
`;
