const express = require('express')
const router = express.Router()

let UserModel = require('../models/User.model')

// user GET requests 
router.get('/user', (req, res) => {
     UserModel.find()
          .then((user) => {
               res.status(200).json(user)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong while loading data',
                    message: err
               })
          })         
})

// user POST requests

router.post('/create', (req, res) => {  
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
router.get('/user/:userId', (req, res) => {
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
router.delete('/user/:id', (req, res) => {
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
router.patch('/user/:id', (req, res) => {
    let id = req.params.id
    const {fname, sname, email,password} = req.body;
    UserModel.findByIdAndUpdate(id, {$set: {fname: fname, sname: sname, email: email, password:password}}, {new: true})
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

module.exports = router;