

import React, {useEffect, Fragment, useState} from 'react'
import ContentTable from './contentTable/contentTabel'
import EditRowDate from './editTable/editRowDate'


function Table(props) {

    const [editBookId, setEditBookId] = useState(null)

    const [editBookData, setEditBookData] = useState({
        BookName: '',
        PublicDate: '',
        BookDescription: '',
        Category: ''
    })

    const handleEditClick = (e, book) => {
        e.preventDefault();
        setEditBookId(book.id);

        const formValues = {
            BookName: book.BookName,
            PublicDate: book.PublicDate,
            BookDescription: book.BookDescription,
            Category: book.BookDescription
        }
    }

    const handleEditChange = (e) => {

        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = {...editBookData};
        newFormData[fieldName] = fieldValue;


        setEditBookData(newFormData);

    }

    const handleEditSumbit = (e) => {
        e.preventDefault();
        
        const editedBook = {
            id:editBookId,
            BookName: editBookData.BookName,
            PublicDate: editBookData.PublicDate,
            BookDescription:editBookData.BookDescription,
            Category:editBookData.Category
        }
        

        const newBooks = [...props.books]

        const index = props.books.findIndex((book => book.id === editBookId))

        newBooks[index] = editedBook
        
        props.replacmentBook(newBooks)

        setEditBookId(null)
    }

    const handelCancelClick = () => {

        setEditBookId(null)

    }

    const handleDeleteClick = (bookId) => {

        const newBooks = [...props.books]

        const index = props.books.findIndex((book) => book.id === bookId)

        newBooks.splice(index, 1)

        props.replacmentBook(newBooks)


    }

    return (
    <form onSubmit={handleEditSumbit}>
        <table>

            <thead>

                <tr>
                    <th>Book Name</th>
                    <th>Publication Date</th>
                    <th>Book Description</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>

            </thead>

            <tbody>
                {props.books.map((book)=>(

                    <Fragment>

                        {editBookId === book.id ? <EditRowDate
                            editBookData = {editBookData}
                            handleEditChange = {handleEditChange}
                            handelCancelClick = {handelCancelClick}
                         /> 
                        : <ContentTable
                            book = {book} 
                            handleEditClick = {handleEditClick}
                            handleDeleteClick = {handleDeleteClick}
                            />}

                    </Fragment>

                ))}
                
            </tbody>
        </table>
    </form>    
    )
}

export default Table