const express = require('express');
const app = express();
const cors = require('cors');
// const pool = require('./pool');
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

app.use('/',routes);

app.listen(Port,()=>{
    console.log(`server started on port ${Port} `);
});