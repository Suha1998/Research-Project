const express = require ('express');
const ratingRoutes = express.Router();
let Rating = require('../models/ratings');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";


//store data
ratingRoutes.route('/add').post(function(req,res){

    let rating = new Rating(req.body);

    rating.save().then(rating => {
        res.status(200).json('rating is added successfully');
     
    }).catch(err => {
        res.status(400).send('unable to save to database');
    });

});

//get data
ratingRoutes.route('/').get(function(req,res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("smartydb");
        dbo.collection('rating').aggregate([
          { $lookup:
             {
                from: 'planner',
                localField: 'planner_id',
                foreignField: '_id',
                as: 'data'
             }
           }
          ]).toArray(function(err, data) {
          if (err) throw err;
          console.log(JSON.stringify(data));
          res.json(data);
          db.close();
        });
      });

});

//edit
ratingRoutes.route('/edit/:id').get(function(req, res){

    let id = req.params.id;
    var query = { PlannerId: id };
    Rating.find(query, function(err, rating){
        res.json(rating);
    });

});

//update
ratingRoutes.route('/update/:id').post(function(req,res){

    Rating.findById(req.params.id, function(err, rating){

        if(!rating){
            res.status(400).send('data is not found');
        }else{

           rating.PlannerId = req.body.PlannerId;
           rating.Comment = req.body.Comment;
           rating.Date = req.body.Date;
           rating.Rate = req.body.Rate;

           rating.save().then(rating => {
               res.json('update completed');
           }).catch(err => {
               res.status(400).send('unable to update the database');
           
            });
       
        }
    
    });


});


//delete
ratingRoutes.route('/delete/:id').get(function(req,res){

    Rating.findByIdAndRemove({id:req.params.id}, function(err, rating){

        if(err)res.json(err);
        else res.json('successfully removed');
    });

});

module.exports = ratingRoutes;
