import React, { useState } from 'react'
import {Grid,Form,Input} from 'semantic-ui-react'
import { setQuery } from '../store/querySlice';
import {useDispatch} from 'react-redux'

function Search() {

    const [inputValue,setInputValue] = useState('');
    const dispatch = useDispatch();

    const onFormSubmit = () =>{
        dispatch(setQuery(inputValue))
    }

  return (
    <Grid columns={2} textAlign='center' className='relative top-24'>
      <Grid.Column>
        <h1>Search Your <span className='text-blue-700'>Favourite Recipe</span> Here</h1>
        <h4>Input recipe seprated by comma</h4>
        <Form onSubmit={onFormSubmit}>
            <Input 
                placeholder="tomato,potato,pizza"
                action={{icon:'search', color: 'blue'}}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            />
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default Search
