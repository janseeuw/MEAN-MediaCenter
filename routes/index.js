var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');
var metadata = require('../helpers/metadata');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/movies', function(req, res, next) {
    Movie.find(function(err, movies) {
        if (err) {
            return next(err);
        }

        res.json(movies);
    });
});

router.get('/movies/:movie', function(req, res, next) {
    res.json(req.movie);
});

router.param('movie', function(req, res, next, id) {
    var query = Movie.findById(id);

    query.exec(function(err, movie) {
        if (err) {
            return next(err);
        }
        if (!movie) {
            return next(new Error("can't find movie"));
        }

        req.movie = movie;
        return next();
    });
});

router.get('/update', function(req, res, next){
    metadata.load(req, res);
});

module.exports = router;