let token = 'f0061035c90109be31ce88a57b74f63f17938bedc5da9eb8'
import { BookState } from "../redux/slices/rootSlice";

export const serverCalls = {
    get: async () => {
        const response = await fetch('https://books-by-gagan.glitch.me/api/books',{
            method: 'GET',
            headers:{
                'content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()
    },
    create: async(data: BookState) => { 
        const response = await fetch('https://books-by-gagan.glitch.me/api/books',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        });
        if (!response.ok){
            throw new Error('Failed to create data on server'), response.status 
        }
        return await response.json()
    },

    update: async(id: string, data: BookState) => { 
        const response = await fetch(`https://books-by-gagan.glitch.me/api/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create data on server'), response.status 
        }

        return await response.json()
    },
    delete: async(id: string) => {
        const response = await fetch(`https://books-by-gagan.glitch.me/api/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

    }
}

   