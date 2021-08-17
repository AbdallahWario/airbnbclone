import React from 'react'

const Button = ({title}) => {
    return (
        <div>
            <button className="border-2 rounded-lg px-4 cursor-pointer 
            hover:text-black-400 hover:shadow-lg active:scale-95  active:bg-gray-100 transition transform duration-100 text-gray-400">
            {title}
            </button>
        </div>
    )
}

export default Button
