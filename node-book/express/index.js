/**
 * express has already implemented a lot of things to make life easier like:
 * URL routing, quiery string parsing, posted data decoding, HTML templates, image serving
 * install: npm install express
 * 
 * express is a node.js web server framework
 * running npm init will initialize a new node.js project,
 * and saves some settings to a package.json file in the root project directory
 * package.json is a single place to configure your application
 * 
 * start applicatin with 'npm start'
 */

// express application
import express from 'express';
import compression from 'compression';

// the url module provides the fileURLToPath function to convert a URL to a path
// 
import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';
// sep (seperator) = '\'
// url of current file can be found in import.meta.url

// configuration
const __dirname = dirname(fileURLToPath(import.meta.url)) + sep,
 cfg = {
    port: process.env.PORT || 3000,
    dir: {
        root: __dirname,
        static: __dirname + 'static' + sep,
        views: __dirname + 'views' + sep
    }   
};

console.dir({ depth:null, color:true });

// express initiation
const app = express();

// express automatically uses the hearer /X-Powered-By: Express
// we can disable it:
app.disable('x-powered-by');

// HTTP compression
// maybe we won't notice now - but always start out trying to get the best performance
app.use(compression());

// use EJS templates
// sets EJS and express view engine to files contained in the views directory
app.set('view engine', 'ejs');
app.set('views', cfg.dir.views);

// log every request to the terminal (demo middleware)
app.use((req,res, next) => {
    console.log(req.url);
    next();
})

/**  note: EJS in invoked by using the Express Router render() method in a routing function
 * the render method is passed the name of the template (message),
 * and an object containing the name/value pairs (in this example, title is set)
 */

// home page route
// routing function is defined to handle HTTP GET requests to the root path
app.get('/', (req, res) => {
    // res.send('Hello World!'); can't use send with EJS, use .render()
    res.render('message', { title: 'Hello World!' });
});
// a second route
app.get('/hello', (req, res) => {
    // res.send('Hello from hello path!') - use .render() for EJS instead of .send()
    res.render('message', { title: 'Hello from hello path!' });
})

// handle error - returns a 'not found' message
// could also: redirect to a different page, log bad requests to file, and more
app.use((req, res) => {
    res.status('404').render('message', { title: 'not found' });
});

// server static assets - introcuces express middleware
app.use(express.static(cfg.dir.static));

// start server
// express server is listening on this defined port
app.listen(cfg.port, () => {
    console.log(`Example app listening at http://localhost:${ cfg.port }`);
});

//exoprt defaults
// other modules can't access cfg unless we export it
export { cfg, app };

/**
 * routing:
 * 
 * routing determines which functinos express executes when it recieves a request for a specific url (/, /this/path)
 * 
 * one function will return an HTTP responce and stop further processing.
 * req: Express HTTP request object 
 *      contains details about the browsers requests
 * res: Express HTTP response object
 *      provides methods used to return a response to the browser
 * 
 */

/**
 * middleware
 * 
 * typically can run code on every request, manipulate/change req/res objects,
 * terminate a repsonse, call the next middleware function
 * 
 * express.static( 'static' ) - returns a middleware function that handles static directory processing.
 * middleware function get 3 arguments:
 *      req, res, next
 *      next: callback that passes control to the next middleware function
 *      middleware functions must always call next() unless they complete/terminate the current request 
 */

/**
 * compressing HTTP repsonses
 * 
 * to improve web app performance, compress your assets before they're returned to the browser
 * compression middleware module: npm install compression
 */

/**
 * HTML template engine
 * 
 * a typical engine can can an HTML template and:
 * substitute variables with real values, allow inclusion of partials (headers, footers, menus), 
 * have basic programming (like loops/conditionals)
 * - HTML template should do as little as possible at runtime
 * one popular template option is EJS which is what we will use.
 *      npm install ejs
 */

/**    
 * advanced routing:
 * 
 * more options:
 * - path expressions: handling many routes with one function
 * - path paramenters: parsing routes to extract values
 * - HTTP methods: using GET, POST, DELETE, PUT and so on
 * - route handlers: grouping related route handler functions into one file
 * 
 * routing path parameters:
 * 
 * route parameters are named segments that follow a :, which identifies a variable in the URL
 * ex) '/user/:id' matches any URL starting /user/ like /user/123 or /user/abc
 * req.params.id would be set to 123 or abc in the examples above
 */