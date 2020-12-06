import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import AThemes from '../DisplayData/AThemes';

function AdultsThemes() {
    const [athemes, setAThemes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/athemes')
          .then(res => setAThemes(res.data))
          .catch(error => console.log(error));
    })

    return (
        <div className="container-form">
            <Route to = "/search" render={() => <AThemes athemes={athemes}/>}/>
        </div>
    )
}

export default AdultsThemes;