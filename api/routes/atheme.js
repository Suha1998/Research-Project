const express = require('express');
const athemeRoutes = express.Router();

let ATheme = require('../models/athemes');
const AThemes = require('../models/athemes');

//Request get all adults themes 
athemeRoutes.route('/').get(function(req,res){
    ATheme.find(function(err, atheme){
        if(err){
            console.log(err);
        }else{
            res.json(atheme);
        }
    });
});

//Request add new adults theme
athemeRoutes.post('/add', (req,res) => {
    const newTheme = new AThemes({
        ThemeName: req.body.Name,
        Description: req.body.Description
    });

    newTheme
       .save()
       .then(() => res.json('The new Theme posted successfully'))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request find theme by id
athemeRoutes.get('/:id', (req, res) => {
    ATheme.findById(req.params.id)
       .then(atheme => res.json(atheme))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request find theme by id and update
athemeRoutes.put('/update/:id', (req, res) => {
        ATheme.findById(req.params.id)
          .then(atheme => {
              atheme.ThemeName = req.body.ThemeName;
              atheme.Description = req.body.Description;
    
              atheme
                .save()
                .then(() => res.json('The Theme is Updated successfully'))
                .catch(err => res.status(400).json(`Error: ${err}`));
          })
          .catch(err => res.status(400).json(`Error: ${err}`));
    })

module.exports = athemeRoutes;