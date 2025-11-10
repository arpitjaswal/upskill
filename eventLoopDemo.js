console.log(' Start of Script');

process.nextTick(() => console.log(' process.nextTick 1'));
Promise.resolve().then(() => console.log(' Promise.then 1'));

setTimeout(() => console.log('setTimeout 0ms'), 0);

setImmediate(() => console.log(' setImmediate'));

fs = require('fs');
fs.readFile(__filename, () => {
  console.log('📘 File read callback (poll phase)');

  process.nextTick(() => console.log('process.nextTick inside I/O'));
  Promise.resolve().then(() => console.log(' Promise.then inside I/O'));
  setImmediate(() => console.log(' setImmediate inside I/O'));
  setTimeout(() => console.log('setTimeout 0ms inside I/O'), 0);
});

console.log(' End of Script');