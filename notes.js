/**
 * common JS:
 * 
 * a commonJS module makes a function or value publicly available using module.exports
 * you can then require the module in another file, or you can require all exported items
 * 
 * but aync calls must be wrapped in functions the run as soon as they are defined
 * 
 * 
 * async programming with node:
 * node.js event loop:
 * all nodejs application initialize an event loop, so once the last statement in code executes,
 * nodejs will loop back to check for:
 * timers, pending callbacks, polling data connections
 * 
 * avoid blocking the event loop
 * long-running JS calculation or processes block the event loop, they should be
 * either split up into smaller subtasks or run in background (with thread or child process)
 * 
 * callbacks
 * issues with using callbacks with async fucntions
 * - fialing to terminate an async function after a callback
 * - accidentily making an async function synchronous
 * 
 * you would have to use standard for and while loops instead of async awaits
 * because each iteration of an async loop won't wait to complete
 */