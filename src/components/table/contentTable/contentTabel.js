function ContentTabel({ book, handleEditClick, handleDeleteClick }){
    return (
        <tr>
            <td>{book.BookName}</td>
            <td>{book.PublicDate}</td>
            <td>{book.BookDescription}</td>
            <td>{book.Category}</td>
            <td>
                <button type="button" onClick = {(event) => handleEditClick(event, book)}>Edit</button>
                <button type="button" onClick = {() => handleDeleteClick(book.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default ContentTabel