import React, { useEffect, useState  } from 'react'
import useConversation from '../zustand/UseConversation';
import axios from 'axios';

const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessage, selectedConversation } = useConversation()

    useEffect(() => {
        const getMessage = async () => {
            setLoading(true);
            if (selectedConversation && selectedConversation._id) {
                try {
                    const res = await axios.get(
                        `/api/message/get/${selectedConversation._id}`
                    );
                    setMessage(res.data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error in getting  message:', error);
                    setLoading(false);
                }

            }


        };
        getMessage();

    }, [selectedConversation,setMessage])
    return {loading , messages}
}

export default useGetMessage;
