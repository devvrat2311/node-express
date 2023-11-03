//Modules
//CommonJS, every file is a module in node JS
//Modules - Encapsulated code (only share minimum)
const names = require('./4-names.js');
const sayHi = require('./5-utils.js');
const data = require('./6-alternative-flavors.js');

console.log(data);
console.log(names);

require('./7-mind-grenade.js');

for(i in names)
{
  sayHi(names[i].name);
}
