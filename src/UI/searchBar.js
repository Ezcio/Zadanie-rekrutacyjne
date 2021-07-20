import PropTypes from 'prop-types'
import React, {createRef, useContext, useEffect, useRef, useState} from 'react'


const propTypes = {
    onSearch: PropTypes.func.isRequired
}

function SearchBar(props){

    const inputRef = createRef(null)

    const [term, setTerm] = useState('');

    const search = () =>{

    }
    const onKeyHandler = (e) =>{
        if (e.key == 'Enter'){
            search()
            props.onSearch(term)
        }
    }

    useEffect(()=>{
        inputRef.current.focus()
    })

    return (

    <div style={{display:'flex'}}>
        <input 
            ref={inputRef}
            style={{
                width: '10rem',
                marginRight: '2rem',
                border:'none',
                borderBottom:'1px solid black'
            }}
            type='text'
            placeholder='Search...'
            value = {term}
            onChange={e => setTerm(e.target.value)}
            onKeyDown={onKeyHandler}
            />

    </div>    
    )
}
SearchBar.propTypes = propTypes
export default SearchBar