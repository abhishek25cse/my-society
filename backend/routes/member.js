const router = require('express').Router();
let Member = require('../models/member_detail.model');

router.route('/').get((req, res) => {
    Member.find()
    .then(members => res.json(members))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/addMember').post((req, res) => {   
    const newMember = new Member({
        NAME : req.body.name,
        ID_CARD : req.body.idCard,
        ID_CARD_NO : req.body.idCardNo,
        PERMANENT_ADDRESS :req.body.address,
        CONTACT_NUMBER : req.body.contactNo,
        EMAIL : req.body.email      
    });
    newMember.save()
      .then(() => res.json('Member added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;