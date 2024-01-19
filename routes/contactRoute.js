const express = require("express");
const router = express.Router();

router.route('/api/contact',(req,res)=>{
        res.status(200).json({message : 'Get all contacts'});
});