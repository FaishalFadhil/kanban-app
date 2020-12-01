if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middleware/errorHandler')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(routes)


app.use(errorHandler)

app.listen(port, ()=>{
  console.log(`your app is listening to http://localhost:${port}`);
})