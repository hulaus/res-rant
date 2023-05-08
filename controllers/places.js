const express = require('express');
const router = express.Router();
const places = require('../models/places')

router.get('/', (req, res) => {
  res.render('places/index', { places })
})

const places = [
  {
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thaifood.jpg'
  },
  {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cafecoffee.jpg'
  }
];

router.get('/', (req, res) => {
  res.render('places/index', { places });
});


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
});

module.exports = router;