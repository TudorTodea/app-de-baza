const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Tudor:tudor@cluster0.dg03s.mongodb.net/UsersDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));


// https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
//app.use('/uploads', express.static('uploads'));

// Serve static assets if in production


  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Running at port ${port}`)
});