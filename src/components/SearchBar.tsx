import React from 'react'
import { FormEvent, useState } from 'react'

function SearchBar(props: { handleSearch: (arg0: FormEvent<HTMLFormElement>, arg1: string) => void }){
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}

export default SearchBar
