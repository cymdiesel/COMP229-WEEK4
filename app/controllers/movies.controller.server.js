import movieModel from '../models/movie.js';

export function DisplayMovieList(req, res, next){
    movieModel.find(function(err, moviesCollection){
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Movie List', page: 'movies/list', movies: moviesCollection});
    })
}