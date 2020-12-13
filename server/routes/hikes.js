var express = require('express');
var router = express.Router();
module.exports = router; 

const Hike = require('../models/hike');
const sequenceGenerator = require('./sequenceGenerator');

function returnError(res, error) {
    res
    .status(500)
    .json({
        message: 'An error occurred',
        error: error
    });
}

router.get('/', (req, res, next) => {
    Hike.find()
    .populate('group')
    .then(hikes => {
        res
        .status(200)
        .json({
            message: 'Hikes fetched successfully',
            hikes: hikes
        });
    })
    .catch(error => {
        returnError(res, error);
    });
})

router.post('/', (req, res, next) => {
   const maxHikeId = sequenceGenerator.nextId("hikes");
 
   const hike = new Hike({
     id: maxHikeId,
     name: req.body.name,
     description: req.body.description,
     imageUrl: req.body.imageUrl
   });
 
   hike.save()
     .then(createdHike => {
       res.status(201).json({
         message: 'Hike added successfully',
         hike: createdHike
       });
     })
     .catch(error => {
        res.status(500).json({
           message: 'An error occurred',
           error: error
         });
     });
 });

 router.put('/:id', (req, res, next) => {
   Hike.findOne({ id: req.params.id })
     .then(hike => {
       hike.name = req.body.name;
       hike.description = req.body.description;
       hike.imageUrl = req.body.imageUrl;
 
       Hike.updateOne({ id: req.params.id }, hike)
         .then(result => {
           res.status(204).json({
             message: 'Hike updated successfully'
           })
         })
         .catch(error => {
            res.status(500).json({
            message: 'An error occurred',
            error: error
          });
         });
     })
     .catch(error => {
       res.status(500).json({
         message: 'Hike not found.',
         error: { hike: 'Hike not found'}
       });
     });
 });

 router.delete("/:id", (req, res, next) => {
   Hike.findOne({ id: req.params.id })
     .then(hike => {
       Hike.deleteOne({ id: req.params.id })
         .then(result => {
           res.status(204).json({
             message: "Hike deleted successfully"
           });
         })
         .catch(error => {
            res.status(500).json({
            message: 'An error occurred',
            error: error
          });
         })
     })
     .catch(error => {
       res.status(500).json({
         message: 'Hike not found.',
         error: { hike: 'Hike not found'}
       });
     });
 });
