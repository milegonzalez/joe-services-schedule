const express = require('express');
const bodyParser = require('body-parser');
const Schedule = require('../database/config.js');
const db = require('../database/config.js');
const mongoose = require('mongoose');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Schedule endpoint
app.get('/schedule', (req, res) => {
  Schedule.find({}, (err, data) => {
  })
    .limit(10)
    // .sort({ week: 1 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.err(err);
    });
});

app.post('/schedule', (req, res) => {
 const newSchedule = new db(req.body);
 newSchedule.save(err => {
   if(err) {
     res.status(500).send(err);
   } else {
     res.status(201).send(newSchedule)
   }
 })
    // .then(() => {
    //   console.log('record inserted!');
    // })
    // .catch((err) => {
    //   console.err(err);
    // });
});





const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});