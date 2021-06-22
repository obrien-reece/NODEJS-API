const bcrypt = require("bcryptjs")

const myFunction = async (password) => {
    // const password = "Evans9080*7733sally"
    const hashedPassword = await bcrypt.hash(password, 8)
    
    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare(password, hashedPassword)
    console.log(isMatch);
}

myFunction('Evans9080*7733sally')

