/* 
    ? Challenge
    * spin up a whole new project called lightModeDarkMode
    * install express, dotenv, nodemon, and cookie-parser
    * setup your scripts
    * build a basic server
    * setup a route that when hit, creates a new cookie called:
        * mode
        * set its default value to false
    * setup a route called light that will change the value of mode to true
    * setup a route called dark that will chagne the value of mode to false
    * you can test this in postman or in the browser
*/

// 1. npm init -y
// 2. setup my `run` and `dev` scripts within package.json
// 3. npm i express dotenv cookie-parser to install all dependencies
// 4. npm i nodemon --save-dev to get nodemon
// 5. npm run dev to start our NODEMON server (don't mistake it with your actual express server)

require("dotenv").config()
const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000

app.use(cookieParser())
// this must be above any routes so that any request comes thru this middleware function
app.get("/light", (req, res) => {
    res.cookie("mode", "true")
    res.send("Light Mode has been set")
})

app.get("/dark", (req, res) => {
    res.cookie("mode", "false")
    res.send("Dark Mode has been set")
})



app.listen(PORT, () => console.log(`server listening on ${PORT}`))

