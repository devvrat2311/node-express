const {readFile, writeFile} = require('fs');
let count = 0;

const getText = (path) => {

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

const putText = (path, data, flags, encoding) => {
    return new Promise((resolve, reject) => {
        console.log('before writeFile() has been called');
        writeFile(path, data, {encoding: encoding, flag: flags}, (err) => {
            if(err) {
                reject(err);
            } else{
                resolve('file has been written in successfully');
            }
        });
        console.log('after writeFile() has been called');
    });
};




const start = async() => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        await putText(
        './content/result-async-new2.txt',
        'Hello there is nothing here to see!!! part 2',
        'w',
        'utf-8'
        );
        // await putText('./content/result-async.txt',
        // second);
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log('sorry the writing or the reading process failed somehow');
        console.log(error);
    }
}

start();

