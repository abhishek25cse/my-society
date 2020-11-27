const router = require('express').Router();
let Flat = require('../models/flat_detail.model');
let FlatOwner =  require('../models/member_flat_mapping.model');

router.route('/').get((req, res) => {
    Flat.find()
    .then(flats => res.json(flats))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {   
    const newFlat = new Flat({
        FLOOR :req.body.floor,
        FLAT_NO : req.body.flatno,
        SOLD : req.body.issold,
        AREA : req.body.area,
        NO_BEDROOMS : req.body.bedroom,
        NO_BATHROOMS : req.body.bathroom,
        NO_BALCONY : req.body.balcony,
        NO_UTILITY : req.body.utility,
        HALL : req.body.hall,
        FLAT_FACING : req.body.facing   
    });
    newFlat.save()
      .then(() => res.json('Flat added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/flatowner').get((req, res) => {
    FlatOwner.find().populate('member_id','NAME CONTACT_NUMBER EMAIL -_id')   
    .populate('flat_id', 'FLAT_NO -_id FLOOR AREA FLAT_FACING')
    .select('member_id flat_id -_id')
    .then(FlatOwner => res.json(FlatOwner))
    .catch(err => res.status(400).json('Error: ' + err));
});

// request body 
//{
   // "member" : ["5fba7054bdeeee2908efafde"],
  //  "flat" : ["5fba7ebdd3573e2c90e35dae"]
//}
router.route('/flatownerallocate').post((req, res) => {
    const owner = new FlatOwner();
  //  const owner = new FlatOwner({
  //      member_id : .member,
  //      flat_id : req.body.flat
 //   });
    owner.member_id.push(req.body.member);
    owner.flat_id.push(req.body.flat);
    owner.save()
    .then(() => res.json("Owner added !! "))
    .catch(err => res.status(400).json('Érror:' +err ));
});


module.exports = router;