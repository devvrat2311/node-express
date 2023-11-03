const os = require('os');

//Does not work
const user = os.userInfo();
console.log(user);

//method returns the system uptime in secondsosss
//this works !
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
}

console.log(currentOS);

