import express from 'express';

//configuration
const cfg = {
    port: process.env.port || 3000
};

// start express
const app = express();

// use EJS templates
app.set('view engine', 'ejs');
app.set('views', 'views');

// body parsing middleware
// extended could help create a richer Request body with nested properties (if youve defined form fields properly)
app.use(express.urlencoded({ extended: true }));

// inital page load ('/') is a GET request but the form submission is a POST request.
// just use app.all() so that you can process all types of rquests, 
// instead of definng the GET and POST as separate routes
app.all('/', (req, res, next) => {
    if (req.method === 'GET' || req.method === 'POST') {
        res.render('form', {
            title: 'Parse HTTP POST dat',
            data: req.body
        })
    } else {
        next();
    }
})

// use .all() instead of this: --------
// // render form
// app.get('/', (req, res) => {
//     res.render('form', {
//         title: 'Parse HTTP GET data',
//         data: req.query
//     });
// });

// start server
app.listen(cfg.port, () => {
    console.log(`Example app listening at localhost"${cfg.port}`);
})