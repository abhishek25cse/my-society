const router = require('express').Router();
let Config = require('../models/config.model');

router.route('/').get((req, res) => {
    Config.find()
    .then(config => res.json(config))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
     
    const newConfig = new Config({
        code :req.body.code,
        desc : req.body.desc,
        type : req.body.type,
    });
    console.log("*********")
    console.log(newConfig)
    newConfig.save()
      .then(() => res.json('Config added!'))
      .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;