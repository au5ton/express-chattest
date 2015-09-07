var express = require('express');
var router = express.Router();

//Generate JSON response
function jsonr(head_message,body_message,code_type) {
    return JSON.stringify({
        head: head_message,
        body: body_message,
        code: code_type
    });
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(jsonr("Successfully connected to API v1",null,"nonerror"));
});

router.get('/messages', function(req, res, next) {

    //Retrieve chat history from database
    //truncate last 50 messages
    //Reverse array order, put the newest messages at the top

});

router.post('/messages', function(req, res, next) {
    //
});

module.exports = router;
