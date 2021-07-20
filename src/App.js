import { useEffect, useState, Fragment } from 'react';
import Table from './components/table/Table';
import data from './data.json'
import FormToAddBook from './components/formToAddBook/FormToAddBook';
import SearchBar from './UI/searchBar';



function App() {


  const [books, setBooks] = useState(data)

  const searchHandler = (term) => {

    //Here is show all dates and search dates 
    if(term != 'all')
    {
      const filtrBooks = [...data].filter(x => x.BookName.toLowerCase().includes(term.toLowerCase()) || x.Category.toLowerCase().includes(term.toLowerCase()))
      setBooks(filtrBooks)
    }
    else {
      setBooks(data)
    }
  }
  //Here is veryfication date
  const updateBooksHandler = (addBook) =>{
    if (Object.values(addBook).every((field) => field != '')){

      addNewBook(addBook)

    }
  }

  const addNewBook = (addBook) => {

    const newBook = {
      BookName: addBook.BookName,
      PublicDate: addBook.PublicDate,
      BookDescription: addBook.BookDescription,
      Category: addBook.Category
    }
    const newBooks = [...books, newBook]
    
    setBooks(newBooks)
  }

  const replacmentBook = (editedBook) => {

    setBooks(editedBook)

  }


  return (
    <div className='table-container'>

      <SearchBar onSearch = {(term) => searchHandler(term)}/>

      <Table books={books} replacmentBook={(editedBook) => replacmentBook(editedBook)}/>

      <FormToAddBook onUpdate = {(addBook) => updateBooksHandler(addBook)}/>
 

    </div>
  );
}

export default App;
