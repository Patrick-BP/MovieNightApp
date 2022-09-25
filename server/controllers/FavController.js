const express = require('express')
const Favmovie = require('../models/FavModel')
const {ObjectId} = require('mongodb')


exports.getAll = async (req, res)=>{
    try{
       const result = await Favmovie.find({userId:req.params.userId});
    res.json(result) 
    }catch(e){
        res.json(e)
    }
    
};


exports.delById = async (req, res) => {
    await Favmovie.findByIdAndDelete(req.params.movieId)
    res.json({_id:req.params.movieId})
};

exports.save = async (req, res) => {
    const find = await Favmovie.findOne({userId:req.body.userId, movieId:req.body.movieId})
    if(!find){
        const result = await new Fav(req.body).save()
    res.json(result)
    }
   
};
