const mongoose = require ('mongoose')

const {Schema} = mongoose

const FavoriteMoviesSchema = new Schema({
    userId:String,
    movieId:{type: Schema.Types.ObjectId, ref: 'movies'}
},{timestamps:true,
    versionKey: false
})

module.exports = mongoose.model('FavoriteMovies',  FavoriteMoviesSchema)