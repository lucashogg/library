// Modal Popup
const addBookModal = document.querySelector('.add-book-modal');
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');
const formError = document.querySelector('.form-error');

openModalBtn.addEventListener('click', () => {
    addBookModal.showModal();
});

closeModalBtn.addEventListener('click', () => {
    formError.classList.add('display-none');
    addBookModal.close();
});

// Check if form requirements met
function formReq() {
    const formInputs = document.querySelectorAll('.add-book-form input');

    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].type === 'checkbox') {
            continue;
        } else if (!formInputs[i].value) {
            formError.classList.remove('display-none');
            return false;
        }
    }
    return true;
}

// Array of books
const myLibrary = [];

// General book constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        if (this.read === false) {
            this.read = true;
        } else {
            this.read = false;
        }
    }
}

// Add book to library function
function addBookToLibrary() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read').checked;

    const newBook = new Book(title.value, author.value, pages.value, read);

    myLibrary.push(newBook);

    addBookCard();

    // Reset form
    const addBookForm = document.querySelector('.add-book-form');
    addBookForm.reset();
}

// Insert book info into card
function addBookCard() {
    const libraryGrid = document.querySelector('.library-grid');
    libraryGrid.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        const bookCard = document.createElement('div');
        const readBtn = document.createElement('div');
        const removeBtn = document.createElement('div');
        const buttonDiv = document.createElement('div');

        bookCard.classList.add('book-card');
        readBtn.classList.add('read-status');
        removeBtn.classList.add('remove-book');

        removeBtn.innerHTML = `
            <div class="book-card-item">
                <button>Remove</button>
            </div>
        `;
        readBtn.innerHTML = `
            <div class="book-card-item read-status">
                <button>${book.read ? "Read" : "Not Read"}</button>
            </div>
        `;

        bookCard.innerHTML = `
            <div>
                <div class="book-card-item">
                    <h3>Title</h3>
                    <p>${book.title}</p>
                </div>
                <div class="book-card-item">
                    <h3>Author</h3>
                    <p>${book.author}</p>
                </div>
                <div class="book-card-item">
                    <h3>Pages</h3>
                    <p>${book.pages}</p>
                </div>
            </div>
        `;

        libraryGrid.appendChild(bookCard);
        bookCard.appendChild(buttonDiv);
        buttonDiv.appendChild(readBtn);
        buttonDiv.appendChild(removeBtn);

        readBtn.addEventListener('click', () => {
            myLibrary[i].toggleRead();
            addBookCard();
        })

        removeBtn.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            addBookCard();
        });
    }
}

// Listen for book submit
const addBookBtn = document.querySelector('#add-book-button');

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (formReq()) {
        addBookToLibrary();
        addBookModal.close()
    }
});