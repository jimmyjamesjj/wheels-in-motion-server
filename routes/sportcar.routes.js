const express = require('express')
const router = express.Router()

let UserModel = require('../models/User.model')
let SportcarModel = require('../models/sportcar.model')
let RequestcarModel =require('../models/requests.model')
const Sportcar = require('../models/sportcar.model')


                      /// user routes starts here!!

// user GET requests 
// router.get('/user', (req, res) => {
//      UserModel.find()
//           .then((User) => {
//                res.status(200).json(User)
//           })
//           .catch((err) => {
//                res.status(500).json({
//                     error: 'Something went wrong while loading data',
//                     message: err
//                })
//           })         
// })

// user POST requests

router.post('/user/create', (req, res) => {  
    const {fname, sname, email, password} = req.body;

    UserModel.create({fname: fname, sname: sname, email: email, password:password})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong while loading data',
                    message: err
               })
          })  
})

// GET requests to ..user/:userId
router.get('/User/:userId', (req, res) => {
    UserModel.findById(req.params.userId)
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong while loading page',
               message: err
          })
     }) 
})

//  DELETE requests to ..user/:id
router.delete('/User/:id', (req, res) => {
    UserModel.findByIdAndDelete(req.params.id)
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong while loading page',
                    message: err
               })
          })  
})

// PATCH requests to ..user/:id
router.patch('/User/:id', (req, res) => {
    let id = req.params.id
    const {fname, sname, email,password} = req.body;
    UserModel.findByIdAndUpdate(id, {$set: {fname: fname, sname: sname,
                                             email: email, password:password}}, {new: true})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               console.log(err)
               res.status(500).json({
                    error: 'erro while loading page',
                    message: err
               })
          }) 
})
/// user model ends here!! 


                    /// sportcar routes starts here !!

// sportcar GET requests 
router.get('/sportcars', (req, res) => {
  SportcarModel.find()
       .then((sportcars) => {
            res.status(200).json(sportcars)
       })
       .catch((err) => {
            res.status(500).json({
                 error: 'Something went wrong while loading data',
                 message: err
            })
       })         
})

// sportcar POST requests

router.post('/sportcars/create', (req, res) => {  
 const {image, carName, Transmission, wheelDrive, Horsepower, insurance, carModel} = req.body;
   let user = req.session.loggedInUser
 SportcarModel.create({image:image, carName:carName, Transmission:Transmission, wheelDrive:wheelDrive, 
                         Horsepower:Horsepower, insurance:insurance, carModel:carModel, User:user._id})
       .then((response) => {
            res.status(200).json(response)
       })
       .catch((err) => {
            res.status(500).json({
                 error: 'Something went wrong while loading data',
                 message: err
            })
       })  
})

// GET requests to ..sportcar/:sportcarId
router.get('/sportcars/:sportcarsId', (req, res) => {
 SportcarModel.findById(req.params.sportcarsId)
  .then((response) => {
       res.status(200).json(response)
  })
  .catch((err) => {
       res.status(500).json({
            error: 'Something went wrong while loading page',
            message: err
       })
  }) 
})

//  DELETE requests by sportcar id ..sportcar/:id
router.delete('/sportcars/:id', (req, res) => {
 SportcarModel.findByIdAndDelete(req.params.id)
       .then((response) => {
            res.status(200).json(response)
       })
       .catch((err) => {
            res.status(500).json({
                 error: 'Something went wrong while loading page',
                 message: err
            })
       })  
})

// PATCH requests to ..sportcar/:id
router.patch('/sportcars/:id', (req, res) => {
 let id = req.params.id
 const {carName, Transmission, wheelDrive, Horsepower, insurance, carModel} = req.body;
 SportcarModel.findByIdAndUpdate(id, {$set: { carName:carName, Transmission:Transmission,
      wheelDrive:wheelDrive, Horsepower:Horsepower, insurance:insurance, carModel:carModel}}, {new: true})
       .then((response) => {
            res.status(200).json(response)
       })
       .catch((err) => {
            console.log(err)
            res.status(500).json({
                 error: 'erro while loading page',
                 message: err
            })
       }) 
})
/// sportcar routes ends here!! 


               // requestcar routes starts here!!!!
               // requestcar GET requests 
router.get('/requestcar', (req, res) => {
  RequestcarModel.find()
       .then((requestcar) => {
            res.status(200).json(requestcar)
       })
       .catch((err) => {
            res.status(500).json({
                 error: 'Something went wrong while loading data',
                 message: err
            })
       })         
})

// requestcar POST requests

router.post('/requestcar/create', (req, res) => {  
 const {date, address} = req.body;

 RequestcarModel.create({date:date, address:address})
       .then((response) => {
            res.status(200).json(response)
       })
       .catch((err) => {
            res.status(500).json({
                 error: 'Something went wrong while loading data',
                 message: err
            })
       })  
})

// GET requestcar to ..requestcar/:requestcarId
router.get('/requestcar/:requestcarId', (req, res) => {
RequestcarModel.findById(req.params.requestId)
  .then((response) => {
       res.status(200).json(response)
  })
  .catch((err) => {
       res.status(500).json({
            error: 'Something went wrong while loading page',
            message: err
       })
  }) 
})

//  DELETE requestcar to ..requestcar/:id
router.delete('/requestcar/:id', (req, res) => {
 RequestcarModel.findByIdAndDelete(req.params.id)
       .then((response) => {
            res.status(200).json(response)
       })
       .catch((err) => {
            res.status(500).json({
                 error: 'Something went wrong while loading page',
                 message: err
            })
       })  
})

// PATCH requestcar to ..requestcar/:id
router.patch('/requestcar/:id', (req, res) => {
 let id = req.params.id
 const {date, address} = req.body;
 RequestcarModel.findByIdAndUpdate(id, {$set: {date:date, address:address}}, {new: true})
       .then((response) => {
            res.status(200).json(response)
       })
       .catch((err) => {
            console.log(err)
            res.status(500).json({
                 error: 'erro while loading page',
                 message: err
           })
      }) 
 })
 // requestcar routes end here!!

module.exports = router;