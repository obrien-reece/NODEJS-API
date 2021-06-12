 const name = "Evance"
 const userAge = 23

const user = {
    name,
    userAge,
    location: "tokyo"
}

// console.log(user);

const product = {
    status: "To be sold",
    ratings: "45 stars",
    salesPrice: undefined,
    stock: 302
}

const transaction = (type, { status, ratings }) => {
    console.log(type, status, ratings);
}

transaction("order", product)

// const {status:productStatus, ratings, stock = 872} = product

// console.log(stock);
// console.log(productStatus);
// console.log(ratings);

// console.log(product);

// const rate = product.ratings
// console.log(rate);
// const stock = product.stock
// console.log(stock);