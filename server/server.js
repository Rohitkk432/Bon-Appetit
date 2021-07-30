const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./pool');
const routes = require('./routes/routes');

//middleware
app.use(cors());
app.use(express.json());

const Port = process.env.PORT || 5000 ;

// pool.connect({
//     host : 'localhost',
//     port : '5432',
//     database : 'bon-appetit',
//     user : 'postgres',
//     password : 'rohitkk432'
// });

pool.connect({
    host : 'ec2-54-211-160-34.compute-1.amazonaws.com',
    port : '5432',
    database : 'df695m07nmo83q',
    user : 'ntwikrlwevxrdv',
    password : '4a4176ce8e2d27b6ffe3e2f2e1b85d14038841e892c147a24900f720ecb03d51'
});


app.use('/',routes);

app.listen(Port,()=>{
    console.log(`server started on port ${Port} `);
});