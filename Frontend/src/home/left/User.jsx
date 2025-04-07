import React from 'react'
import useConversation from '../../zustand/UseConversation'
import { useSocketContext } from '../../context/SocketContext';
import { useAuth } from '../../context/AuthProvider';


const User = ({ user }) => {
    const { selectedConversation, setselectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === user._id;
    const {socket , onlineUsers} = useSocketContext()
    const isOnline = onlineUsers.includes(user._id);

    return (
        <div className={`hover:bg-slate-700 duration-300 ${isSelected ? "bg-slate-700" : ""}`}
            onClick={() => setselectedConversation(user)}>


            <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
                {/* <div className="avatar avatar-online"> */}
                <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>
                        {user.fullname}
                    </h1>
                    <span>
                        {user.email}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default User
