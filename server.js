const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const bodyParser = require('body-parser')
const itemRouter = require('./routes/item')
const cartRouter = require('./routes/cart')



const passport = require('./lib/passportConfig')

//Initialise our app
const app = express()

const PORT = 4000


app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.static('public'))

// app.use(express.json())
app.use(bodyParser.json())

app.use('/', itemRouter)
app.use('/', cartRouter)

app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: 'Thisisasecret!',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 86400000}
}))

app.use(session({
    secret: 'Thisisasecret!',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 86400000}
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next){
    res.locals.currentUser = req.user
    next()
})






// Import our Routes
const authRoute = require('./routes/auth')
const coursesRoute = require('./routes/courses')
const profileRoute = require('./routes/profile')  


// Mount our Routes
app.use('/', authRoute)
app.use('/', coursesRoute)  
app.use('/', profileRoute)   









app.listen(PORT, () => {
    console.log(`The Library is open on port ${PORT}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/DiveJet',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Mongoose Is Connected to MongoDB')
}).catch((err) => {
    console.log('An error occurred', err)
})