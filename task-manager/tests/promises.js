// const doWorkCallback = (callback) => {
//     setTimeout(() => {
//         callback(undefined, 'This is my error')
//     }, 2000);
// }

// doWorkCallback((error, data) => {
//     if(error){
//         return console.log("Error", error);
//     }

//     console.log("Success", data);
// })

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("Things went okay")
        reject("An error occured")
    }, 2000);
})

doWorkPromise.then((result) => {
    console.log("Success", result);
}).catch((error) => {
    console.log(error);
})