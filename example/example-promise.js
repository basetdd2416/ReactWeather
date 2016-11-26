/**
 * Created by BooSalutuu on 26/11/2559.
 */
/*
function getTempPromise(location) {
    return new Promise(function (resolve, reject) {
       resolve(79);
        reject('city not found');
    });
}

getTempPromise('Philadelphia')
    .then(function (temp) {
        console.log('promise success',temp)
},function (err) {
        console.log('promise error',err)
})*/


function addPromise(a,b) {
    return new Promise(function (resolve, reject) {
        const isValid = typeof a === 'number' && typeof b === 'number';

        if (!isValid) {
            return reject("a & b need to be a number");
        }

        resolve(a+b);
    });
}

addPromise(10,20).then(function (result) {
    console.log(result)
},function (error) {
    console.log(error)
})
addPromise('xx',20).then(function (result) {
    console.log(result)
},function (error) {
    console.log(error)
})
addPromise(10,'xx').then(function (result) {
    console.log(result)
},function (error) {
    console.log(error)
})
