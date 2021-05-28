console.log('Welcome to the Password Validator Tool')

const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Name: ", function(user) {
    console.log(`Nice to meet you, ${user}. Please enter a password below to see if it meets the criteria`)
    
    reader.question("Password ", function(password) {
        if (password.length >= 10) {
            console.log('Success!')
        } else {
        console.log("Password needs to be at least 10 characters long. Please try again")
        }
    })
});