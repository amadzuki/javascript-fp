const books = [
  {
    title: "Harry Potter",
    author: "JK Rowling",
    year: 2000
  },
  {
    title: "Fisika Kuantum",
    author: "Professor Fisika",
    year: 2010
  },
  {
    title: "Lord of the Rings",
    author: "JJ Tokien",
    year: 1995
  }
]

// -----------------------------------------------------------------------------

const displayBooks = () => {
  const bookDescriptions = books.map(book => {
    return `${book.title} is authored by ${book.author} on year ${book.year}`
  })

  console.log(bookDescriptions)
}

// -----------------------------------------------------------------------------

const filterBooksByYear = yearMinimum => {
  const filteredBooks = books.filter(book => book.year >= yearMinimum)
  console.log(filteredBooks)
}

// -----------------------------------------------------------------------------

const searchBookByTitle = title => {
  const foundBook = books.find(book => {
    if (book.title.toLowerCase().includes(title.toLowerCase())) {
      return book
    }
  })
  console.log(foundBook)
}

// -----------------------------------------------------------------------------

const getAverageBookYear = () => {
  const totalYear = books.reduce((total, book) => total + book.year, 0)
  return Math.round(totalYear / books.length)
}
