const express = require('express')
const Fav = require('../models/FavModel')
const {ObjectId} = require('mongodb')


exports.getAll = async (req, res)=>{
    try{
       const result = await Fav.findAll({userId:req.params.userId}).populate('Movies');
    res.json(result) 
    }catch(e){
        res.json(e)
    }
    
};


exports.delById = async (req, res) => {
    await Fav.findByIdAndDelete(req.params.movieId)
    res.json({_id:req.params.movieId})
};

exports.save = async (req, res) => {
    const find = await Fav.findOne({userId:req.body.userId, movieId:req.body.movieId})
    if(!find){
        const result = await new Fav(req.body).save()
    res.json(result)
    }
   
};
