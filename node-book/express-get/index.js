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

// render form
app.get('/', (req, res) => {
    res.render('form', {
        title: 'Parse HTTP GET data',
        data: req.query
    });
});

// start server
app.listen(cfg.port, () => {
    console.log(`Example app listening at localhost"${cfg.port}`);
})