/**
 * ch4: debugging code.
 * 
 * install a code linter to help with cleaning up code
 * install:
 * npm install eslint -g
 * use: eslint myscript.js
 * 
 * use source control like Git to keep track of working versions in case a future version ruins everything
 * 
 * use test-driven development
 * 
 * env variable can be det to development when debugging, or production on a live server:
 * set NODE_ENV=development (cmd prompt)
 * env:NODE_ENV="development" (powershell)
 * 
 */
// or you can enable debugging messages with your application: ex)
// running in development mode?
const DEVMODE = (process.env.NODE_ENV !== 'production');

if (DEVMODE) {
  console.log('application started in development mode');
}
/**
 * node debugger:
 * node inspect webhello.js
 * 
 * pauses at first line, displays debugging propmpt
 * 
 * debugging with chrome:
 * node --inspect webhello.js
 */