const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/view-format').get((req, res) => {
  User.find()
    .then(users => {
        var userList = [];
        users.forEach ( 
          user => 
          {
             var usr = {
                name : user.username
              }
             userList.push(usr);
          }
         );
       res.json(userList);  
       })      
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username});
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(users => res.json("User deleted "))
    .catch(err => res.status(400).json('Error: ' + err));
});

// the below api not working
router.route('updateold/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;     
      user.save()
      .then(() => res.json("User updated  "))
      .catch(err => res.status(400).json('Error catc hed : ' + err));
    })    
    .catch(err => res.status(400).json('Error  oautside: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;
      user.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//sample request 
//{"username":"abhishek ji sddress",
//"address":"Bengaluru cum Ranchi"
//}

router.route('/addUser').post((req, res) => {
  const username = req.body.username;
  const address = req.body.address;
  const newUser = new User({
    username:req.body.username,
    address :req.body.address});
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;