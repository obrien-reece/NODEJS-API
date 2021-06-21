const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0){
                return reject("Numbers must be none negative")
            }
            resolve(a + b)    
        }, 2000);
        
    })
}


const doWork = async () => {
    const sum = await add(3, -5)
    const sum1 = await add(sum, 5)
    const sum2 = await add(sum1, 5)
    const sum3 = await add(sum2, 5)
    return sum3
}

doWork().then((data) => {
    console.log("Name", data);
}).catch((e) => {
    console.log(e);
})