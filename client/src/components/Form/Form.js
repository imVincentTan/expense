import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles.js';
import { createPost } from '../../actions/posts.js';

const Form = () => {
    const [postData, setPostData] = useState({
        name:'',
        cost:'',
        category: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    // send POST request
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating an expense</Typography>
                <TextField 
                name='name' 
                variant='outlined' 
                label='Name' 
                fullWidth
                value={postData.creator}
                onChange={(e) => setPostData({ ...postData, name: e.target.value})}
                />
                <TextField 
                name='cost' 
                variant='outlined' 
                label='Cost' 
                fullWidth
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, cost: e.target.value})}
                />
                <TextField 
                name='category' 
                variant='outlined' 
                label='Category' 
                fullWidth
                value={postData.message}
                onChange={(e) => setPostData({ ...postData, category: e.target.value})}
                />
                <Button className={classes.buttonSubmit}
                variant='contained'
                color='primary'
                size='large'
                type='submit'
                fullWidth>
                    Submit
                </Button>
            </form>
        </Paper>
    );
}

export default Form;