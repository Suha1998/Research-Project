const express = require ('express');
const plannerRoutes = express.Router();
let Planner = require('../models/planner.model');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

//store data

plannerRoutes.route('/add').post(function(req,res){

    let planner = new Planner(req.body);

    planner.save().then(planner => {
        res.status(200).json('planner is added successfully');
     
    }).catch(err => {
        res.status(400).send('unable to save to database');
    });

});


//get data

plannerRoutes.route('/').get(function(req,res){

    Planner.find(function(err, planner){

        if(err){
            console.log(err);
        }

        else{
            res.json(planner);
        }
    });



// //edit

// plannerRoutes.route('/edit/:id').get(function(req, res){

//     let id = req.params.id;
//     Planner.findById(id, function(err, planner){

//         res.json(planner);
//     });

// });

// //update

// plannerRoutes.route('/update/:id').post(function(req,res){

//     Planner.findById(req.params.id, function(err, planner){

//         if(!planner){
//             res.status(400).send('data is not found');
//         }else{

//            planner.planner_name = req.body.planner_name;
//            planner.party_category = req.body.party_category;
//            planner.contact_no = req.body.contact_no;
//            planner.address = req.body.address;
//            planner.specialities = req.body.specialities;
//            planner.previous_work = req.body.previous_work;

//            planner.save().then(planner => {
//                res.json('update completed');
//            }).catch(err => {
//                res.status(400).send('unable to update the database');
           
//             });
       
//         }
    
//     });


});


//delete

plannerRoutes.route('/delete/:id').get(function(req,res){

    Planner.findByIdAndRemove({id:req.params.id}, function(err, planner){

        if(err)res.json(err);
        else res.json('successfully removed');
    });

});

module.exports = plannerRoutes;
