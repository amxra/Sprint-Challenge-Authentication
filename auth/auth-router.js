const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../helpers/helpers');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10) // encrypts password 
  user.password = hash;

  Users.add(user)
   .then(saved => {
     res.status(201).json(saved);
   })
   .catch(error => {
     res.status(500).json(error);
   });
});

router.post('/login', (req, res) => {
  // implement login
  let {username, password} = req.body;

  Users.findBy({username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {//compeares password and username to login successfully to return welcome message and token 
        const token = generateToken(user); // make value of token the token generated for user 
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token: token,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' }) 
      }
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  }
  const options = { //gives you expiration for token 
    expiresIn: '1d', //time in days 
  }

  const result = jwt.sign(//method that takes in payload and option and returns it
    payload,
    'This is a Secret',
    options,
  )

  return result;
}

module.exports = router;
