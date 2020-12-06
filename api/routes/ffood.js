const express = require('express');
const ffoodRoutes = express.Router();

let FFood = require('../models/ffoods');
const FFoods = require('../models/ffoods');

//Request get all family foods
ffoodRoutes.route('/').get(function(req,res){
    FFood.find(function(err, ffood){
        if(err){
            console.log(err);
        }else{
            res.json(ffood);
        }
    });
});

//Request add new family foods
ffoodRoutes.post('/add', (req,res) => {
    const newfood = new FFoods({
        welcome_food: req.body.welcome_food,
        starter: req.body.starter,
        main_course: req.body.main_course,
        Dessert: req.body.Dessert
    });

    newfood
       .save()
       .then(() => res.json('The new Food posted successfully'))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request find food by id
ffoodRoutes.get('/:id', (req, res) => {
    FFood.findById(req.params.id)
       .then(ffood => res.json(ffood))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request find food by id and update
ffoodRoutes.put('/update/:id', (req, res) => {
        FFood.findById(req.params.id)
          .then(ffood => {
              ffood.welcome_food = req.body.welcome_food;
              ffood.starter = req.body.starter;
              ffood.main_course = req.body.main_course;
              ffood.Dessert = req.body.Dessert;
    
              ffood
                .save()
                .then(() => res.json('The Food is Updated successfully'))
                .catch(err => res.status(400).json(`Error: ${err}`));
          })
          .catch(err => res.status(400).json(`Error: ${err}`));
    })

module.exports = ffoodRoutes;