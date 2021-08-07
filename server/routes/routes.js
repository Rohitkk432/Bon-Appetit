var express = require('express');
var router = express.Router();
const pool = require('../pool');

//getting full users table
router.get('/users',async (req,res)=>{
    try {
        const info = await pool.query("SELECT * FROM users;");
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//adding new user
router.post('/users',async (req,res)=>{
    try {
        const {email,name}=req.body;
        const newUser = await pool.query("INSERT INTO users (name,email,address) VALUES ($1,$2,'BITS Pilani Goa Campus') RETURNING *;",[name,email]);
        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

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