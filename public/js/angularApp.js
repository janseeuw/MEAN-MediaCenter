angular.module('mediacenter', ['ui.router'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('movies', {
                    url: '/movies',
                    templateUrl: '/movies.html',
                    controller: 'MoviesCtrl',
                    resolve: {
                        postPromise: ['movies',
                            function(movies) {
                                return movies.getAll();
                            }
                        ]
                    }
                })
                .state('movie', {
                    url: '/movies/{id}',
                    templateUrl: '/movie.html',
                    controller: 'MovieCtrl',
                    resolve: {
                        movie: ['$stateParams', 'movies',
                            function($stateParams, movies) {
                                return movies.get($stateParams.id);
                            }
                        ]
                    }
                });

            $urlRouterProvider.otherwise('movies');
        }
    ])
    .factory('movies', ['$http',
        function($http) {
            // service body
            var o = {
                movies: []
            };
            o.getAll = function() {
                return $http.get('/movies').success(function(data) {
                    angular.copy(data, o.movies);
                });
            };
            o.get = function(id) {
                return $http.get('/movies/' + id).then(function(res) {
                    return res.data;
                });
            };
            return o;
        }
    ])
    .controller('MoviesCtrl', [
        '$scope',
        'movies',
        function($scope, movies) {
            $scope.movies = movies.movies;
        }
    ])
    .controller('MovieCtrl', [
        '$scope',
        'movies',
        'movie',
        function($scope, movies, movie) {
            $scope.movie = movie;
        }
    ]);