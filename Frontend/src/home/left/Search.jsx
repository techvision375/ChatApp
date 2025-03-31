import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Search = () => {
    return (
        <div className='h-[10vh]'>
            <div className='h-[10vh]'>
                <div className='px-6 py-4'>
                    <form action="">
                        <div className='flex space-x-3'>
                            <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]">
                                <input type="text" className='grow outline-none' placeholder="Search" />

                            </label>
                            <button>
                                <IoIosSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300' />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Search
