import { useState } from "react"
import { nanoid } from 'nanoid'


function FormToAddBook (props) {

    const [addBook, setAddBook] = useState({
        id: nanoid(),
        BookName: '',
        PublicDate: '',
        BookDescription: '',
        Category: ''
      })


    const updateBooks = (e) => {
        e.preventDefault()
        addNewBook()
        props.onUpdate(addBook)
    }

    const addNewBook = () => {
        
        const newBook = {
          BookName: addBook.BookName,
          PublicDate: addBook.PublicDate,
          BookDescription: addBook.BookDescription,
          Category: addBook.Category
        }
        
      }
      

    const addDataBookHandler = (e) => {

        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = {...addBook};
        newFormData[fieldName] = fieldValue;

        setAddBook(newFormData)

        
    }


    return(
    <div className="formToAddBook">

        <h1>Add Book</h1>

        <form>

            <input
                type='text' 
                name='BookName'
                required="required" 
                placeholder="Book name"
                onChange={addDataBookHandler}
            />

            <input
                type='text'
                name='PublicDate'
                required="required"
                placeholder="Public date"
                onChange={addDataBookHandler}
            />

            <input
                type='text'
                name='BookDescription'
                required="required" 
                placeholder="Book description"
                onChange={addDataBookHandler}
            />
            <input
                type='text'
                name='Category' 
                required="required" 
                placeholder="Category book"
                onChange={addDataBookHandler}
            />

            <button type="sumbit" onClick = {updateBooks}>Add Book</button>

        </form>

    </div>

    )
}

export default FormToAddBook