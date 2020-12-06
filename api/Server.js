const express = require ('express');
const cors = require('cors');
const bodyparser = require ('body-parser');
const app = express ();
const mongoose = require ('mongoose');
const port = process.env.PORT || 4000;


app.use(bodyparser.json());
app.use(cors());
app.use(
    bodyparser.urlencoded({
        extended: false
    })
);

const config = require ('./DB.js');

const kthemeRoutes = require('./routes/ktheme');
const kfoodRoutes = require('./routes/kfood');
const tfoodRoutes = require('./routes/tfood');
const tthemeRoutes = require('./routes/ttheme');
const athemeRoutes = require('./routes/atheme');
const ffoodRoutes = require('./routes/ffood');

mongoose
   .connect(config.DB,{ 
       useNewUrlParser : true,
       useCreateIndex : true,
       useUnifiedTopology : true
    })
   .then(() =>{console.log('Database is connceted successfully')},
err=>{console.log('Cannot connect to the database' +err)}
);


var Users = require('./routes/users.route');
app.use('/users', Users);

const plannerRoutes = require('./routes/planner.route');
app.use('/planner', plannerRoutes);

const ratingRoutes = require('./routes/rating.route');
app.use('/rating', ratingRoutes);

const emailRoutes = require('./routes/email.route');
app.use('/email', emailRoutes);

app.use('/kthemes', kthemeRoutes);
app.use('/kfoods', kfoodRoutes);
app.use('/tfoods', tfoodRoutes);
app.use('/tthemes', tthemeRoutes);
app.use('/athemes', athemeRoutes);
app.use('/ffoods', ffoodRoutes);

app.listen(port, () => {
    console.log('Server is running on port:', port);
});









