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


//get customization with dish id and customization id 
router.get('/dish/:id/:customcategory',async (req,res)=>{
    try {
        const {id,customcategory} = req.params
        const info = await pool.query(`SELECT customization.id,customization.name,customization.price FROM customization JOIN dish ON dish.customcategoryid${customcategory} = customization.customcategoryid WHERE dish.id = $1 ;`,[id]);
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});





module.exports = router;