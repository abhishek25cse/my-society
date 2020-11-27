const router = require('express').Router();
let Parking = require('../models/parking_detail.model');

router.route('/').get((req, res) => {
    Parking.find()
    .then(parking => res.json(parking))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {   
    const newParkingSpace = new Parking({
        FLOOR :req.body.floor,       
        SOLD : req.body.isSold,
        AREA : req.body.area,
        TYPE : req.body.type,
        IS_ENCLOSED : req.body.enclosed 
    });
    newParkingSpace.save()
      .then(() => res.json('New Parking Area added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;