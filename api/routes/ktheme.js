const express = require('express');
const kthemeRoutes = express.Router();

let KTheme = require('../models/kthemes');
const KThemes = require('../models/kthemes');

//Request get all kids themes 
kthemeRoutes.route('/').get(function(req,res){
    KTheme.find(function(err, ktheme){
        if(err){
            console.log(err);
        }else{
            res.json(ktheme);
        }
    });
});

//Request add new kids theme
kthemeRoutes.post('/add', (req,res) => {
    const newTheme = new KThemes({
        ThemeName: req.body.Name,
        Description: req.body.Description
    });

    newTheme
       .save()
       .then(() => res.json('The new Theme posted successfully'))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request find theme by id
kthemeRoutes.get('/:id', (req, res) => {
    KTheme.findById(req.params.id)
       .then(ktheme => res.json(ktheme))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request find plan by id and update
kthemeRoutes.put('/update/:id', (req, res) => {
        KTheme.findById(req.params.id)
          .then(ktheme => {
              ktheme.ThemeName = req.body.ThemeName;
              ktheme.Description = req.body.Description;
    
              Ktheme
                .save()
                .then(() => res.json('The Theme is Updated successfully'))
                .catch(err => res.status(400).json(`Error: ${err}`));
          })
          .catch(err => res.status(400).json(`Error: ${err}`));
    })

module.exports = kthemeRoutes;