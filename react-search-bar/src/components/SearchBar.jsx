import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'
import { useState } from 'react'

export default function SearchBar() {
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="input-wrapper">
            <FaSearch className='search-icon' />
            <input 
                type="text" 
                placeholder='Type your search...' 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    )
}