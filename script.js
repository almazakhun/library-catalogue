document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('bookList');
    const searchBar = document.getElementById('searchBar');
    const pagination = document.getElementById('pagination');

    let currentPage = 1;
    const booksPerPage = 10;
    let books = []; // This should be replaced with actual data

    // Fetch books data (replace this with actual data fetching logic)
    function fetchBooks() {
        books = [
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' },
            { title: 'Book 1', author: 'Author 1', date: '2024-01-01' }
            // Add more books as needed
        ];
        displayBooks();
    }

    // Display books based on current page and search query
    function displayBooks() {
        const filteredBooks = books.filter(book => {
            const query = searchBar.value.toLowerCase();
            return book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query);
        });
        const start = (currentPage - 1) * booksPerPage;
        const end = start + booksPerPage;
        const booksToDisplay = filteredBooks.slice(start, end);

        bookList.innerHTML = '';
        booksToDisplay.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('bookItem');
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p>${book.date}</p>
            `;
            bookList.appendChild(bookItem);
        });

        updatePagination(filteredBooks.length);
    }

    // Update pagination controls
    function updatePagination(totalBooks) {
        const totalPages = Math.ceil(totalBooks / booksPerPage);
        pagination.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.disabled = i === currentPage;
            button.classList.toggle('disabled', i === currentPage);
            button.addEventListener('click', () => {
                currentPage = i;
                displayBooks();
            });
            pagination.appendChild(button);
        }
    }

    searchBar.addEventListener('input', () => {
        currentPage = 1;
        displayBooks();
    });

    fetchBooks();
});