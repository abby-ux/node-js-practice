#!/usr/bin/env node

// fetch name from command or fallback
const nameArg = capitalize(process.argv[2] || process.env.USER || process.env.USERNAME || 'world');

//output message
console.log(`hello ${ nameArg }`);
// then you would type 'node hello.js <this is nameArg>' into the cmd line
// if I types 'node hello.js' then I would get 'hello abby-' back, because that is my USER

function capitalize(str) {
    return str
        .trim()
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// process.argv: property in the standard library that returns an array containing the cmd line args:
/**
 * argv[0] = node commands itself
 * argv[1] = script you would run (ex: ./hello.js)
 * argv[2] = first argument passed (into hello.js)
 */

// 
// process.env property:
/**
 * process.env property returns an object containing the environment variables in name/value pairs
 * could run 'process.env' in REPL to see all the variables.
 */