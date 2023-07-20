import React, { useState, useEffect } from 'react'; 
import { serverCalls } from '../api';
import { BookState } from '../redux/slices/rootSlice';
// import our Book Interface 


export const useGetData = () => {
    const [bookData, setData] = useState<BookState[]>([]); 

    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {bookData, getData: handleDataFetch}

}