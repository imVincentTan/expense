import React from 'react';

import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';

import { useSelector } from 'react-redux';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux'

import { deletePost } from '../../actions/posts.js';


const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'name', headerName: 'Name', maxWidth: 200, minWidth: 90, width: 200 },
    { field: 'cost', headerName: 'Cost', maxWidth: 200, minWidth: 90, width: 200 },
    { field: 'category', headerName: 'Category', maxWidth: 200, minWidth: 110, width: 200 },
];

export default function DataTable() {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selectionModel, setSelectionModel] = React.useState([]);


    return (
        <div style={{ height: 650, width: '100%', backgroundColor: 'white' }}>
            <DataGrid 
                component={Paper} 
                className={ classes.container } 
                rows={ posts } 
                columns={columns} 
                pageSize={10} 
                checkboxSelection 
                onSelectionModelChange={(newSelection) => {
                    setSelectionModel(newSelection.selectionModel);
                }}
                selectionModel={selectionModel} 
            />
            <Button
                variant='contained'
                color='secondary'
                size='small'
                onClick={ () => {
                    selectionModel.forEach(element => dispatch(deletePost(element)));
                }}
                fullWidth>
                    Delete entries
            </Button>
        </div>
    );
}