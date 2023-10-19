const express = require('express');
const app = express();
const PORT = 3000;

const books = [ { id: 1, title: "The Great Gatsby" }, { id: 2, title: "To Kill a Mockingbird" }, { id: 3, title: "1984" }, ];
app.get('/',(req,res)=>{
    res.send('/books to see the books')
})
app.get("/books",(req,res)=>{
    console.log('sending');
    res.send(books)
})

app.get('/books/long',(req,res)=>{
    res.send('List of long books')
})

app.get('/greet/:firstName/:lastName',(req,res)=>{
    res.send(`Hello ${req.params.firstName} ${req.params.lastName}`)
})

app.get('/books/:id',(req,res)=>{
    const inputId = parseInt(req.params.id);
    const book = books.find((book)=>book.id === inputId)
    if(!book){
        return res.status(404).send("book not found")
    }else{
        res.send(`Book Title: ${book.title}`);
    }
})

app.get('/fixed-example/:id', (req, res) => { 
    const bookId = parseInt(req.params.id); 
    const book = books.find((b) => b.id === bookId); 
    if (!book) { return res.status(404).send("Book not found"); } res.send(`Book Title: ${book.title}`); });





app.listen(PORT, ()=>{
    console.log("server is up and running at " , PORT);
})