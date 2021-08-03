var express = require('express');
var router = express.Router();
const pool = require('../pool');

//get restaurants info
router.get('/restaurant',async (req,res)=>{
    try {
        const info = await pool.query("SELECT * FROM restaurants;");
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get all dishes
router.get('/dishes',async (req,res)=>{
    try {
        const info = await pool.query("SELECT * FROM dish;");
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//getting customcategory table
router.get('/customcategory',async (req,res)=>{
    try {
        const info = await pool.query("SELECT * FROM customcategory;");
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//getting customization table
router.get('/customization',async (req,res)=>{
    try {
        const info = await pool.query("SELECT * FROM customization;");
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});





module.exports = router;