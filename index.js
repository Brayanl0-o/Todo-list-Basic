const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require('dotenv').config()


const Todo = require("./models/todo")

//const todoRoutes = require('./routers/todo')

const app = express()
const port = 3000


app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//app.use('/api/todo', todoRoutes)




app.get("/", (request, response) => {
    Todo.find()
        .then(result => {
            response.render("index", { data: result })
            console.log(result)
        })
})



app.post("/", (request, response) => {
    const todo = new Todo({
        todo: request.body.todoValue
    })
    todo.save()
        .then(result => {
            response.redirect("/")
        })
})



app.put('/:id/update', (request, response) => {
    const { updatedTodo } = request.body;
    Todo.findByIdAndUpdate(request.params.id, { todo: updatedTodo }, { new: true })
        .then(result => {
            response.sendStatus(200);
        })
        .catch(error => {
            console.error(error);
            response.sendStatus(500);
        });
});


app.delete("/:id", (request, response) => {
    Todo.findByIdAndDelete(request.params.id)
        .then(result => {
            console.log(result)
        })
})

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conected to DB'))
    .catch((err) => console.error(err))

app.listen(port, () => {
    console.log("server is running on port " + port)
})
