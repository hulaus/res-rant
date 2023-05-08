const express = require('express');
const router = express.Router();
const places = require('../models/places')

router.get('/', (req, res) => {
  res.render('places/index', { places })
})

/*
router.get('/', (req, res) => {
  res.render('places/index', { places });
});


Why is there a duplicate? 
*/


router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
    places.push(req.body)
  res.send('/places')
})


router.get('/new', (req, res) => {
  res.render('places/new');
});


router.get('/:id', (req, res) => {
  res.render('places/id');
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.send('/places')
  }
})


/* router.get('/:id', (req, res) => {
  res.render('places/id');
}); 

MIGHT NEED THIS LATER
*/


module.exports = router;