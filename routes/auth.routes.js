const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');

const UserModel = require('../models/User.model');

router.post('/Signup', (req, res) => {
    const {fname, sname, email, password } = req.body;
    console.log(fname, sname, email, password);
 
    // -----SERVER SIDE VALIDATION ----------
    
    // if (!fname || !sname || !email || !password) {
    //     res.status(500)
    //       .json({
    //         errorMessage: 'Please enter first name, second name, email and password'
    //       });
    //     return;  
    // }
    // const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    // if (!myRegex.test(email)) {
    //     res.status(500).json({
    //       errorMessage: 'Email format not correct'
    //     });
    //     return;  
    // }
    // const myPassRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
    // if (!myPassRegex.test(password)) {
    //   res.status(500).json({
    //     errorMessage: 'Password needs to have atleast 8 characters, a number and an Uppercase alphabet'
    //   });
    //   return;  
    // }
     
    // creating a salt to hash the password 
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    UserModel.create({fname: fname, sname: sname, email, password: hash})
      .then((user) => {
        // ensuring that we don't share the hash as well with the user
        user.passwordHash = "***";
        res.status(200).json(user);
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.status(500).json({
            errorMessage: 'username or email entered already exists!',
            message: err,
          });
        } 
        else {
          res.status(500).json({
            errorMessage: 'Something went wrong!',
            message: err,
          });
        }
      })
});
 
// all POST requests ../signin
router.post('/signin', (req, res) => {
    const {email, password } = req.body;

    // -----SERVER SIDE VALIDATION ----------
    
    // if ( !email || !password) {
    //     res.status(500).json({
    //         error: 'Please enter Username. email and password',
    //    })
    //   return;  
    // }
    // const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    // if (!myRegex.test(email)) {
    //     res.status(500).json({
    //         error: 'Email format not correct',
    //     })
    //     return;  
    // }
    
  
    // Find if the user exists in the database 
    UserModel.findOne({email})
      .then((userData) => {
        console.log(password)
           //check if passwords match
          bcrypt.compare(password, userData.password)
            .then((doesItMatch) => {
                //if it matches
                if (doesItMatch) {
                  // req.session is the special object that is available to you
                  userData.password = "***";
                  console.log(userData)
                  req.session.loggedInUser = userData;
                  res.status(200).json(userData)
                }
                //if passwords do not match
                else {
                    res.status(500).json({
                        error: 'Passwords don\'t match',
                    })
                  return; 
                }
            })
            .catch((error) => {
              console.log(error)
                res.status(500).json({
                    error: 'Email format not correct',
                })
              return; 
            });
      })
      //throw an error if the user does not exists 
      .catch((err) => {
        res.status(500).json({
            error: 'Email does not exist',
            message: err
        })
        return;  
      });
  
});
 
//all POST requests to ../logout
router.post('/logout', (req, res) => {
    req.session.destroy();
    res.status(204).json({});
})


// middleware to check if user is loggedIn
const isLoggedIn = (req, res, next) => {  
  if (req.session.loggedInUser) {
      //calls whatever is to be executed after the isLoggedIn function is over
      next()
  }
  else {
      res.status(401).json({
          message: 'Unauthorized user',
          code: 401,
      })
  };
};


// THIS IS A PROTECTED ROUTE
router.get("/user", isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

module.exports = router;