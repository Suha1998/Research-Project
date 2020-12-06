const express = require('express');
const tthemeRoutes = express.Router();

let TTheme = require('../models/tthemes');
const TThemes = require('../models/tthemes');

//Request get all teens themes 
tthemeRoutes.route('/').get(function(req,res){
    TTheme.find(function(err, ttheme){
        if(err){
            console.log(err);
        }else{
            res.json(ttheme);
        }
    });
});

//Request add new teens theme
tthemeRoutes.post('/add', (req,res) => {
    const newTheme = new TThemes({
        ThemeName: req.body.Name,
        Description: req.body.Description
    });

    newTheme
       .save()
       .then(() => res.json('The new Theme posted successfully'))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request find theme by id
tthemeRoutes.get('/:id', (req, res) => {
    TTheme.findById(req.params.id)
       .then(ttheme => res.json(ttheme))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request find theme by id and update
tthemeRoutes.put('/update/:id', (req, res) => {
        TTheme.findById(req.params.id)
          .then(ttheme => {
              ttheme.ThemeName = req.body.ThemeName;
              ttheme.Description = req.body.Description;
    
              ttheme
                .save()
                .then(() => res.json('The Theme is Updated successfully'))
                .catch(err => res.status(400).json(`Error: ${err}`));
          })
          .catch(err => res.status(400).json(`Error: ${err}`));
    })

module.exports = tthemeRoutes;