var express = require('express');
var router = express.Router();

//var User = require('../../models/user');
var ChatMessage = require('../../models/chatmessage');

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
    res.send(jsonr("Successfully connected to API v1",null,"success"));
});

router.get('/messages', function(req, res, next) {

    //Retrieve chat history from database
    //truncate last 50 messages
    //Reverse array order, put the newest messages at the top

    var history = [];

    ChatMessage.find({}, function(err, messages) {
        if (err) throw err;
        history = messages;
    });

    if(!history.length) {
        res.send(jsonr("Couldn\'t retrieve any ChatMessages", null,"error"));
    }

    res.send(history);

});

router.post('/messages', function(req, res, next) {
    var newMessage;
    var request = req.body;
    console
    if(req.body.message.)
    res.send();
});

module.exports = router;
