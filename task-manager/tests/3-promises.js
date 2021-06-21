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

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve("Things went okay")
//         reject("An error occured")
//     }, 2000);
// })

// doWorkPromise.then((result) => {
//     console.log("Success", result);
// }).catch((error) => {
//     console.log(error);
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)    
        }, 2000);
        
    })
}

add(5, 4).then((sum) => {
    console.log(sum);
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2);
}).catch((e) => {
    console.log(e);
})

// add(3,3).then((sum) => {
//     console.log(sum);

//     add(sum, 4).then((sum2) => {
//         console.log(sum2);
//     }).catch((e) => {
//         console.log(e);
//     })
// }).catch((e) =>{
//     console.log(e);
// })
