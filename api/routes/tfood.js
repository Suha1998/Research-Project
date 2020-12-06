const express = require('express');
const tfoodRoutes = express.Router();

let TFood = require('../models/tfoods');
const TFoods = require('../models/tfoods');

//Request get all kids foods
tfoodRoutes.route('/').get(function(req,res){
    TFood.find(function(err, tfood){
        if(err){
            console.log(err);
        }else{
            res.json(tfood);
        }
    });
});

//Request add new kids foods
tfoodRoutes.post('/add', (req,res) => {
    const newfood = new TFoods({
        party_drinks: req.body.party_drinks,
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
tfoodRoutes.get('/:id', (req, res) => {
    TFood.findById(req.params.id)
       .then(tfood => res.json(tfood))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request find food by id and update
tfoodRoutes.put('/update/:id', (req, res) => {
        TFood.findById(req.params.id)
          .then(tfood => {
              tfood.party_drinks = req.body.party_drinks;
              tfood.starter = req.body.starter;
              tfood.main_course = req.body.main_course;
              tfood.Dessert = req.body.Dessert;
    
              tfood
                .save()
                .then(() => res.json('The Food is Updated successfully'))
                .catch(err => res.status(400).json(`Error: ${err}`));
          })
          .catch(err => res.status(400).json(`Error: ${err}`));
    })

module.exports = tfoodRoutes;