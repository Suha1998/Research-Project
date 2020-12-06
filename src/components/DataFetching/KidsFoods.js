import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Link } from 'react-router-dom';
import KFoods from '../DisplayData/KFoods';
import KidsThemes from './KidsThemes';


function KidsFoods() {
    const [kfoods, setKFoods] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/kfoods')
          .then(res => setKFoods(res.data))
          .catch(error => console.log(error));
    })

    return (
        <div className = "container-form">
            <Route to = "/search" render={() => <KFoods kfoods={kfoods}/>}/>
            <KidsThemes/>
        </div>
    )
}

export default KidsFoods;

