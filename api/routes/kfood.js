const express = require('express');
const kfoodRoutes = express.Router();

let KFood = require('../models/kfoods');
const KFoods = require('../models/kfoods');

//Request get all kids foods
kfoodRoutes.route('/').get(function(req,res){
    KFood.find(function(err, kfood){
        if(err){
            console.log(err);
        }else{
            res.json(kfood);
        }
    });
});

//Request add new kids foods
kfoodRoutes.post('/add', (req,res) => {
    const newfood = new KFoods({
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
kfoodRoutes.get('/:id', (req, res) => {
    KFood.findById(req.params.id)
       .then(kfood => res.json(kfood))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request find food by id and update
kfoodRoutes.put('/update/:id', (req, res) => {
        KFood.findById(req.params.id)
          .then(kfood => {
              kfood.party_drinks = req.body.party_drinks;
              kfood.starter = req.body.starter;
              kfood.main_course = req.body.main_course;
              kfood.Dessert = req.body.Dessert;
    
              kfood
                .save()
                .then(() => res.json('The Food is Updated successfully'))
                .catch(err => res.status(400).json(`Error: ${err}`));
          })
          .catch(err => res.status(400).json(`Error: ${err}`));
    })

module.exports = kfoodRoutes;