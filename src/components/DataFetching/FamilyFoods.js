import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Link } from 'react-router-dom';
import FFoods from '../DisplayData/FFoods';



function FamilyFoods() {
    const [ffoods, setFFoods] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/ffoods')
          .then(res => setFFoods(res.data))
          .catch(error => console.log(error));
    })

    return (
        <div className = "container-form">
            <Route to = "/search" render={() => <FFoods ffoods={ffoods}/>}/>
        </div>
    )
}

export default FamilyFoods;

