import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search = ({ setSearchData }) => {
    const [searchValue, setSearch] = useState('')
    const searchDb = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        searchValue.length === 0 && setSearchData([])
    }, [searchValue, setSearchData])
    return (
        <div className="search___div">
            <input type="search" value={searchValue} onChange={searchDb} />
            <button onClick={async () => {
                const res = await axios.get(`http://localhost:5000/api/search?s=${searchValue}`)
                setSearchData(res.data)
            }} className="search__btn"> search</button>
        </div>
    )
}

export default Search
