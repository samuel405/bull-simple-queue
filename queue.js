const Queue = require('bull');

const queue01 = new Queue('queue01');

console.log(queue01);
