var express = require('express');
var router = express.Router();
// const pool = require('../pool');

// router.get('/restaurant',async (req,res)=>{
//     try {
//         const info = await pool.query("SELECT name FROM restaurants");
//         res.json(info.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

router.get('/',async (req,res)=>{
    try {
        res.send("<h1>SERVER WORKING!!</h1>");
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;