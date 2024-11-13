// web applications require a web server to return HTML pages when they're requested by the browser
// so usually the browser requests something and then the server will get that

// but in node.js, your JS applicaiton is a web server.

// define a variable for the server's port, 
    // can be passed in cmd line, gotten from env variables, or fallback to 3000
const
    port = (process.argv[2] || process.env.PORT || 3000),
    http = require('http');

// use the HTTP createServer library to create a web server that listens on said port
// when the callback function gets a request, it can examine that request object and return a repsonse
// in this simple example the server will return the 'Hello World!' response reguardless of the URL
// Try accessing http://localhost:3000/, http://localhost:3000/abc/, or http://localhost:3000/abc/123/: every page is the same.
http.createServer((req, res) => {
    console.log(req.url);
    // change the url input into a variable we can display later
    const nameArg = capitalize( req.url // example input: hello-world !!!   
        .replace(/[^\w.,-]/g, ' ')  // "hello-world   "
        .replace(/\s+/g, ' ')  // "hello-world "
        .trim() // "hello-world"
        || 'world');

    res.statusCode = 200; // sets HTTP status code to 200, meaning OK
    res.setHeader('Content-Type', 'text/html'); // tell the browser the response will be HTML
    res.end(`<p>Hello ${ nameArg }</p>`) // send the HTML response to the browser
}).listen(port); // tells the server to listen for requests on this port
// it is safer to run web apps on higher port numbers, because on lower ports,
// ports may be used on other software and on Mac you have to be a superuser to even get below port 1000

console.log(`Server running at http://localhost:${ port }/`);
    // note: the '/' at the end is part of the directory path

// run with 'node webhello.js' to see the server running

function capitalize(str) {
    return str
        .trim()
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// if you want changes to update without restating an application evert time,
// use nodemon. Install then use: nodemon webhello.js
// when you save a code change, nodemon automatically restarts the application. 