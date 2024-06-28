document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('book-form');
    const bookList = document.getElementById('book-list');
    const bookId = document.getElementById('book-id');
    const title = document.getElementById('title');
    const author = document.getElementById('publishedDate');
    const pages = document.getElementById('pages');

    const apiUrl = 'http://localhost:3000/api/books';

    bookForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const bookData = {
            title: title.value,
            author: author.value,
            publishedDate: publishedDate.value,
            pages: pages.value
        };

        if (bookId.value){
            //Actualizar libro
            await fetch(`${apiUrl}/${bookid.value}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookData)
            });
        }

        bookForm.reset();
        bookId.value = '';
        loadBooks();
    });
    async function loadBooks() {
        const response = await fetch(apiUrl);
        const books = await response.json();

        bookList.innerHTML= '';
        books.forEach(book => {
            const li = document.createElement('li');
            
        });
    }
})