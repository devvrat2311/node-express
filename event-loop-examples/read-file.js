const { readFile } = require('fs');

console.log('started first program, first task'); 

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first program, first task');

});

console.log('starting second program');
