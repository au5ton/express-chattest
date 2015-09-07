// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    message: String,
    attatched_link: String,
    sent_at: Date,
    sent_by: String
});

// on every save, add the date
userSchema.pre('save', function(next) {
    var currentDate = new Date();
    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at) {
        this.created_at = currentDate;
    }

    next();
});

// the schema is useless so far
// we need to create a model using it
var ChatMessage = mongoose.model('ChatMessage', userSchema);

// make this available to our users in our Node applications
module.exports = ChatMessage;
