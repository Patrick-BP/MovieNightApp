const express = require('express')
const Playlist = require('../models/PlayListModel')
const {ObjectId} = require('mongodb')


exports.getAll = async (req, res)=>{
    const result = await Playlist.find({userId:req.params.userId}).populate('Movies');
    res.json(result)
};


exports.delById = async (req, res) => {
    await Playlist.findByIdAndDelete(req.params.movieId)
    res.json({_id:req.params.movieId})
};

