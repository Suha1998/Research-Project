import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import TThemes from '../DisplayData/TThemes';

function TeensThemes() {
    const [tthemes, setTThemes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/tthemes')
          .then(res => setTThemes(res.data))
          .catch(error => console.log(error));
    })

    return (
        <div className="container-form">
            <Route to = "/search" render={() => <TThemes tthemes={tthemes}/>}/>
            
        </div>
    )
}

export default TeensThemes;