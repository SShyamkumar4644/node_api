const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb+srv://admin:Shyam46@cluster0.hoj6isf.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

module.exports = connect;