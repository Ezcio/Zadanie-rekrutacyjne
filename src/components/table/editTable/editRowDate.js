
function EditRowDate({ editBookData, handleEditChange, handelDeleteClick }) {
    return (
        <tr>
            <td>
                <input type='text' placeholder='Enter a name...' name='BookName' onChange={handleEditChange} value={editBookData.BookName}/>
            </td>
            <td>
                <input type='text' placeholder='Enter a Public Date...' name='PublicDate' onChange={handleEditChange} value={editBookData.PublicDate}/>
            </td>
            <td>
                <input type='text' placeholder='Enter a Book Description...' name='BookDescription' onChange={handleEditChange} value={editBookData.BookDescription}/>
            </td>
            <td>
                <input type='text' placeholder='Enter a Category...' name='Category' onChange={handleEditChange} value={editBookData.Category}/>
            </td>  
            <td>
                <button type='sumbit'>Save</button>
                <button type='sumbit' onClick={handelDeleteClick}>Cancel</button>
            </td>  
        </tr>
    )
}

export default EditRowDate; 