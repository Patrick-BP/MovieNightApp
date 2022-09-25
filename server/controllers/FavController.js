const express = require('express')
const Fav = require('../models/FavModel')
const {ObjectId} = require('mongodb')


exports.getAll = async (req, res)=>{
    const result = await Fav.find({userId:req.params.userId}).populate('Movies');
    res.json(result)
};


exports.delById = async (req, res) => {
    await Fav.findByIdAndDelete(req.params.movieId)
    res.json({_id:req.params.movieId})
};

