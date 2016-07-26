var router = require('express').Router();
var passport = require('passport');


router.get('/', function(request, response){
  response.send(request.isAuthenticated());
});

router.post('/',
  passport.authenticate('local', {
    successRedirect: '/views/success.html',
    failureRedirect: '/views/failure.html'
  })
);

module.exports = router;
