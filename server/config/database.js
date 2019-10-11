const crypto = require('crypto').randomBytes(256).toString('hex');  

//localURL
// uri: 'mongodb://localhost:27017/ecomdb',

module.exports = {
   
    uri: 'mongodb://girish:g1r1sh@ds333768.mlab.com:33768/organicshop',
    secret: crypto,
    db: 'ecomdb'
}