import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import TFoods from '../DisplayData/TFoods';
import TeensThemes from './TeensThemes';


function TeensFoods() {
    const [tfoods, setTFoods] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/tfoods')
          .then(res => setTFoods(res.data))
          .catch(error => console.log(error));
    })

    return (
        <div className = "container-form">
            <Route to = "/search" render={() => <TFoods tfoods={tfoods}/>}/>
            <TeensThemes/>
        </div>
    )
}

export default TeensFoods;

