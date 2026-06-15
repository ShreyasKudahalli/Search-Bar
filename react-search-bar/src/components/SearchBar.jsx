import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'
import { useState } from 'react'

export default function SearchBar({ setResults }) {
    const [inputValue, setInputValue] = useState('')

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
            return (
                value &&
                user &&
                user.name &&
                user.name.toLowerCase().includes(value)
            );
            });
            setResults(results);
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