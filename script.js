// Array of books
const myLibrary = [];
// General book constructor
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }
}
// Add books to library function
function addBookToLibrary () {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read').checked;

    const newBook = new Book(title.value, author.value, pages.value);
    if (read) {
        newBook.read = read;
    };

    myLibrary.push(newBook);
}
// Listen for book submit
const addBookBtn = document.querySelector('#add-book-button');

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addBookToLibrary()
})