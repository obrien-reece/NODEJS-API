
const getFood = () => {
    console.log("Thank you, i have received my food");
}

const prepareFood = (food, callback) => {
    setTimeout(() => {
        console.log("Your " + food + " is ready");
        callback()
    },2000)
}

const orderFood= (food) => {
    console.log("I want a " + food);
    prepareFood(food, getFood)
}

orderFood("Burger")