var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/session', function(req, res, next) {
  res.json({session_id: "session123"});
});
router.get('/session', function(req, res, next) {
  res.json({session_id: "session123"});
});

router.get('/token', function(req, res, next) {

  res.json({request_token: "token123"});
});

router.get('/account', function(req, res, next) {

  res.json({accountId: 123});
});
module.exports = router;
