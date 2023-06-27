const os = require('os'); //Cause it's built-in

//info about current user
const user = os.userInfo();
//console.log(user);
//method returns the system uptime in secs
//console.log(`The system uptime is: ${os.uptime()/3600} secs`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)