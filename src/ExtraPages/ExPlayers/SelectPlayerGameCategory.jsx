import React from 'react'

const SelectPlayerGameCategory = () => {
    return (
        <div>
            <select className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50' id="menu-button" aria-expanded="true" aria-haspopup="true">
                <option>Category</option>
                <option>BGMI</option>
                <option>Pokemon Unite</option>
                <option>New State</option>
                <option>CS:GO</option>
                <option>Valorant</option>
                <option>FIFA-e</option>
            </select>
        </div>
    )
}

export default SelectPlayerGameCategory
