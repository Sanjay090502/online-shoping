const app = require('./app');

const { connect } = require('http2');
const path = require('path');
const connectDatabase = require('./config/database');


connectDatabase();
app.listen(process.env.PORT,()=>{
    console.log(`revanth server listening to the port: ${process.env.PORT} in ${process.env.NODE_ENV}`);
})