var express = require('express');
var router = express.Router();

//Sample chatHistory format
var ch = [
    {
        message: "Happy new year!",
        sentAt: "1/1/2015",
        sentBy: "fluff"
    },
    {
        message: "Christmas was awesome!",
        sentAt: "12/25/2014",
        sentBy: "zzz"
    },
    {
        message: "What's up, man?",
        sentAt: "12/24/2014",
        sentBy: "skream"
    },
    {
        message: "What's up, man?",
        sentAt: "12/24/2014",
        sentBy: "skream"
    },
    {
        message: "What's up, man?",
        sentAt: "12/24/2014",
        sentBy: "skream"
    },
    {
        message: "What's up, man?",
        sentAt: "12/24/2014",
        sentBy: "skream"
    },
    {
        message: "What's up, man?",
        sentAt: "12/24/2014",
        sentBy: "skream"
    },
    {
        message: "What's up, man?",
        sentAt: "12/24/2014",
        sentBy: "skream"
    },
    {
        message: "What's up, man?",
        sentAt: "12/24/2014",
        sentBy: "skream"
    },
    {
        message: "What's up, man?",
        sentAt: "12/24/2014",
        sentBy: "skream"
    },
    {
        message: "What's up, man?",
        sentAt: "12/24/2014",
        sentBy: "skream"
    },
    {
        message: "Here are my dank memes: imgur.com",
        sentAt: "12/23/2014",
        sentBy: "soot"
    }
];

/* GET home page. */
router.get('/', function(req, res, next) {

    // var db = req.db;
    // var collection = db.get('usercollection');
    // collection.find({},{},function(e,docs){
    //     console.log(JSON.stringify(docs));
    //     // res.render('userlist', {
    //     //     "userlist" : docs.
    //     // });
    // });

    //Retrieve chat history from database
    //Save last 50 messages
    //Reverse array order, put the newest messages at the top

    res.render('index', { title: 'Express', chatHistory: ch });
});



router.post('/', function(req, res, next) {
    console.log(req.headers["user-agent"]);
    console.log(req.body);
    res.render('index', { title: 'Express', chatHistory: ch });
});

module.exports = router;
