const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();
const config = require('./config/database');
const ecomController = require('./controllers/ecomController')(router);
const cors = require('cors');
var path = require('path');

const PORT = process.env.PORT || 8080;

mongoose.Promise = global.Promise
mongoose.connect(config.uri,{ useNewUrlParser: true,useUnifiedTopology: true }, (err) => {
    if(err) {
        console.log('Could not connect to db');
    } else {
        console.log('Connected to db: ' + config.db);
    }
});

var app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use('/api', ecomController);

app.use(express.static(path.join(__dirname,'public')));
	
app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'public/index.html'));
})


app.listen(PORT, () => console.log('Server started at port :'+ PORT));