import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'
import { useState } from 'react'

export default function SearchBar({ setResults }) {
    const [inputValue, setInputValue] = useState('')

    const fetchData = (value) => {
        fetch(`http://127.0.0.1:8000/api/products/?search=${value}`)
            .then((response) => response.json())
            .then((data) => {
                setResults(data);
            });
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        fetchData(e.target.value)
    }
    return (
        <div className="input-wrapper">
            <FaSearch className='search-icon' />
            <input 
                type="text" 
                placeholder='Type your search...' 
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    )
}