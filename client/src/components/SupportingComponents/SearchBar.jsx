import React from 'react'

function SearchBar() {
    return (

        <div clsassName="w-full max-w-sm min-w-[300px]">
            <div clsassName="relative">
                <input type="text" clsassName="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                
            </div>
        </div>

    )
}

export default SearchBar