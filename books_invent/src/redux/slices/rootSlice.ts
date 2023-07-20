import { createSlice } from '@reduxjs/toolkit'; 


export interface BookState {
    name: string;      
    description: string;
    price: number;
    author: string;
    genre: string;
    publisher: string;
    edition: string;
    language: string;
    cost_of_prod: number;
    series: string 
}

const initialState: BookState = {
    name: '',   
    description: '',
    price: 0,
    author: '',
    genre: '',
    publisher: '',
    edition: '',
    language: '',
    cost_of_prod: 0,
    series: ''
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },              
        chooseDescription: (state, action ) => { state.description = action.payload },
        choosePrice: (state, action) => { state.price = action.payload }, 
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseGenre: (state, action) => { state.genre = action.payload },
        choosePublisher: (state, action) => { state.publisher = action.payload },
        chooseEdition: (state, action) => { state.edition = action.payload },
        chooseLanguage: (state, action) => { state.language = action.payload },
        chooseProdCost: (state, action) => { state.cost_of_prod = action.payload },
        chooseSeries: (state, action) => { state.series = action.payload }
    }
})
    
// Export our Reducers 
export const reducer = rootSlice.reducer 
console.log(rootSlice)
export const {
    chooseName,    
    chooseDescription,
    choosePrice,
    chooseAuthor,
    chooseGenre,
    choosePublisher,
    chooseEdition,
    chooseLanguage,
    chooseProdCost,
    chooseSeries
} = rootSlice.actions 