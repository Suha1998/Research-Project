import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import KThemes from '../DisplayData/KThemes';

function KidsThemes() {
    const [kthemes, setKThemes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/kthemes')
          .then(res => setKThemes(res.data))
          .catch(error => console.log(error));
    })

    return (
        <div className="container-form">
            <Route to = "/search" render={() => <KThemes kthemes={kthemes}/>}/>
        </div>
    )
}

export default KidsThemes;