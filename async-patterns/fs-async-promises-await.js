const {readFile} = require('fs');
let count = 0;

const getText = (path, path2) => {

    return new Promise((resolve, reject) => {
console.log('before readFile() has been called');
readFile(path, 'utf-8', (err, data) => {
    if(err)
    {
        reject(err);
    } else{
        resolve(data);
    }
console.log('after readFile() has been called');
console.log(++count);
});
    })
}

const start = async() => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}

start();

