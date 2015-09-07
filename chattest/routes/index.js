var express = require('express');
var router = express.Router();

//Sample chatHistory format


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});



router.post('/', function(req, res, next) {
    console.log(req.headers["user-agent"]);
    console.log(req.body);
    res.render('index', { title: 'Express', chatHistory: ch });
});

module.exports = router;
