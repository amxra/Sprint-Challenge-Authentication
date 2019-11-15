const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
      jwt.verify( // to verify if token is correct for user 
          token,
          'This is a Secret',
          (err, decodedToken) => {
              if (err) {
                  res.status(401).json({ message: err.message})
              } else{
                  req.decodedToken = decodedToken;
                  next()
              }
          }
      )
  } else{
      res.status(400).json({ message: 'No credentials provided'})
  }
};

