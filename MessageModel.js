const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    email: String,
    age: Number
  });
  
  const Person = mongoose.model('message', messageSchema);

  exports.createMessage = (inmail, inmessage) => {
    var message = new message({
        email: email, 
        text: intext
       })
       
       return message
    }
    