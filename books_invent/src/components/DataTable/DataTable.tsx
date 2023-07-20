// External Imports
import React, { useState } from 'react'; 
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid'; 
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, 
    Typography} from '@mui/material'; 

// Internal Imports
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { BookForm } from '../BookForm';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90},
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 150
    }, 
    {
        field: 'price',
        headerName: 'Price',
        width: 110
    },
    {
        field: 'author',
        headerName: 'Author',
        width: 150
    }, 
    {
        field: 'genre',
        headerName: 'Genre',
        width: 150
    }, 
    {
        field: 'publisher',
        headerName: 'Publisher',
        width: 150
    }, 
    {
        field: 'edition',
        headerName: 'Edition',
        width: 150
    }, 
    {
        field: 'language',
        headerName: 'Language',
        width: 150
    }, 
    {
        field: 'cost_of_prod',
        headerName: 'Cost_of_prod',
        width: 150
    }, 
    {
        field: 'series',
        headerName: 'Series',
        width: 150
    }, 
]  

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 45 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

      
  export const DataTable = () => {
    const { bookData, getData } = useGetData()
    const [ open, setOpen ] = useState(false)
    const [ gridData, setData ] = useState<GridRowSelectionModel>([])


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    const myAuth = localStorage.getItem('myAuth')

    if (myAuth === 'true'){
    return (
        <Box sx={{ height: 400, width: '100%'}}>
            <DataGrid
                rows={bookData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange={(newSelectionModel) => setData(newSelectionModel)}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='warning' onClick={deleteData}>Delete</Button>
            {/* Dialog Popup for Updating a Book */}
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Update A Book</DialogTitle>
                <DialogContent>
                    <DialogContentText>Book id: {gridData[0]}</DialogContentText>
                    <BookForm id={`${gridData[0]}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='error'>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
        )} else {
            return (
                <Box>
                    <Typography variant='h4'>Please Sign In to View your Books!</Typography>
                </Box>
            )
        }
  }