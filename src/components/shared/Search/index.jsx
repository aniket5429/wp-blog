'use client'

import { useState } from 'react'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const onSearch = ({ target }) => {
        setSearchQuery(target.currentValue)
    }

    return (
        <div className="relative mb-3">
            <div className="flex items-center rounded-md border shadow-sm">
                <input
                    type="text"
                    placeholder="Search..."
                    className="focus:ring-blue-500 w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                />
                <button className="bg-blue-500 hover:bg-blue-600 rounded-r-md px-4 py-2 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 18l6-6m0 0l-6-6m6 6H4"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Search
