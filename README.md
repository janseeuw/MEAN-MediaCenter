
=====

HTML Mediacenter based on MEAN stack (MongoDB, ExpressJS, AngularJS, NodeJS). Mongoose is used for object modeling.
Run on your local/remote machine to display a catalog of movies and play a movie.

![Screenshot](http://cl.ly/image/2J1H1K2O340v/Schermafbeelding%202014-10-26%20om%2019.00.20.png)

##Status

Current implementation is limited.

### How do I start?

    git clone https://github.com/wixon/MEAN-MediaCenter.git
    cd MEAN-MediaCenter
    npm install
    node server

### Where do I put my movies?

Moviefiles must be placed inside the **/public** folder. 

### How do I add my movies (and metadata)?

Database can not be populated automatically yet. 

    mongodb://localhost/mediacenter

You should insert movies with the following structure in **mediacenter** collection:

    {
      title: "Godzilla",
      thumb: "https://image.tmdb.org/t/p/w92/szVwkB4H5yyOJBVuQ432b9boO0N.jpg",
      path: "movies/Godzilla.mkv"
    }

See [MovieSchema](https://github.com/wixon/chips/blob/master/models/Movies.js)

## Future work

- Build metadata database by giving root folder path to movies
- Play files outside /public folder
- Change view from "library" to "files". The first should show metadata (poster image, rating, authors, ...), the latter should make it possible to browse the file system (starting from the given root folder (see first point))
- Add TV-shows

## Contribute

Feel free to contribute to this project.

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -m 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## Author

[Jonas Anseeuw](jns.me)

