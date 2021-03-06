const express=require('express');
const scraper=require('./scraper');
const cors=require('cors');


const app=express();
app.use(cors());

app.get('/',(req,res)=>{
    res.json({
        message:'Scraping is fun'
    });
});

app.get('/search/:title',(req,res)=>{
    scraper
    .searchMovies(req.params.title)
    .then(movies=>{
        res.json(movies);
    });
});

app.get('/movie/:imdbID',(req,res)=>{
    scraper
    .getMovie(req.params.imdbID)
    .then(movie=>{
        res.json(movie);
    });
});


const port=process.env.port || 3000;
app.listen(port,()=>{
console.log(`Listening on ${port}`);
});