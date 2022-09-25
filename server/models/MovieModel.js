const mongoose = require ('mongoose')

const {Schema} = mongoose

const MovieSchema = new Schema({
    title:String,
    overview:String,
    popularity:Number,
    releaseDate: Date,
    genre:String,
    language:String,
    director:String,
    type:String,
    country:String,
    bigimg:{type:String, default:"sample-big-img.png"},
    smallimg:{type:String, default:"sample-small-img.png"},
    isDeleted:{type:Boolean, default:false}
},{timestamps:true,
    versionKey: false
})

module.exports = mongoose.model('Movies',  MovieSchema)