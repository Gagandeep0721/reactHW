//External imports
import React from 'react'; 
import { useDispatch, useStore } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form'; 
import { Button } from '@mui/material'; 

//Internal imports 
import {
    chooseName, 
    chooseDescription,
    choosePrice,
    chooseAuthor,
    chooseGenre,
    choosePublisher,
    chooseEdition,
    chooseLanguage,    
    chooseSeries } from '../../redux/slices/rootSlice'; 
import { BookState } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks/FetchData'; 


interface BookFormProps {
    id?: string;
    data?: BookState
}


export const BookForm = (props: BookFormProps) => {
    const dispatch = useDispatch();
   
    const store = useStore()
    const { register, handleSubmit } = useForm<BookState>({})


    const onSubmit: SubmitHandler<BookState> = async(data, event) => {
        if (event) event.preventDefault(); 
    
        if (props.id){
            console.log(props.id)
            await serverCalls.update(props.id, data);
            console.log(`Updated book: ${data.name}`);
            window.location.reload()
            if (event) event.currentTarget.reset()
        } else {
            dispatch(chooseName(data.name))            
            dispatch(chooseDescription(data.description))
            dispatch(choosePrice(data.price))
            dispatch(chooseAuthor(data.author))
            dispatch(chooseGenre(data.genre))
            dispatch(choosePublisher(data.publisher))
            dispatch(chooseEdition(data.edition))
            dispatch(chooseLanguage(data.language))
            dispatch(chooseSeries(data.series))
            //dispatch(choosecost_of_prod(data.cost_of_prod))

            console.log(store.getState())

            await serverCalls.create(store.getState() as BookState)
            window.location.reload()
            if (event) event.currentTarget.reset()
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Book Name</label>
                    <Input {...register('name')} name='name' placeholder='Name Here' />
                </div>                
                <div>
                    <label htmlFor='description'>Description</label>
                    <Input {...register('description')} name='description' placeholder='Description Here' />
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <Input {...register('price')} name='price' placeholder='Price Here' />
                </div>
                <div>
                    <label htmlFor='author'>Author</label>
                    <Input {...register('author')} name='author' placeholder='Author Name Here' />
                </div>
                <div>
                    <label htmlFor='genre'>Genre </label>
                    <Input {...register('genre')} name='genre' placeholder='Genre Here' />
                </div>
                <div>
                    <label htmlFor='publisher'>Publisher</label>
                    <Input {...register('publisher')} name='publisher' placeholder='PUblisher Here' />
                </div>
                <div>
                    <label htmlFor='edition'>Edition</label>
                    <Input {...register('edition')} name='edition' placeholder='Edition Here' />
                </div>
                <div>
                    <label htmlFor='language'>Language</label>
                    <Input {...register('language')} name='language' placeholder='Language Here' />
                </div>
                <div>
                    <label htmlFor='cost_of_prod'>Cost of Prod</label>
                    <Input {...register('cost_of_prod')} name='cost_of_prod' placeholder='Cost of Production Here' />
                </div>
                <div>
                    <label htmlFor='series'>Series</label>
                    <Input {...register('series')} name='series' placeholder='Series Here' />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}


