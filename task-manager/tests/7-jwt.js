const jwt = require("jsonwebtoken")

const token = jwt.sign({ _id: "2344323443" }, "thisismynewtoken", { expiresIn: "2 seconds" })

const data = jwt.verify(token, "thisismynewtoken")
console.log(data);

console.log(token);