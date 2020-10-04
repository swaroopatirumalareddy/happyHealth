const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('userLogin'));

router.post('/', (req, res) => {
  const { email, password } = req.body;
  let errors = [];
  var em = email + ' Please enter all fields'
  if (!email && !password) {
    errors.push({ msg: em });
  }
  if (password.length < 8) {
    errors.push({ msg: 'Password must be at least 8 characters' });
  }
  if (errors.length > 0) {
    res.render('userLogin', {
      errors,
      email,
      password
    });
  }
  else{
    res.render('adminLogin');
  }

});

router.get('/adminLogin', (req, res) => res.render('adminLogin'))

router.post('/adminLogin', (req, res) => {

  const { email, password } = req.body;
  let errors = [];
  var em = email + ' Please enter all fields'
  if (!email && !password) {
    errors.push({ msg: em });
  }
  if (password.length < 8) {
    errors.push({ msg: 'Password must be at least 8 characters' });
  }
  if (errors.length > 0) {
    res.render('adminLogin', {
      errors,
      email,
      password
    });
  }
  else{
    res.render('userLogin');
  }

});

module.exports = router;
