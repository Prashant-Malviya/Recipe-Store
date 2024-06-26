import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    queryValue : 'pasta'
}

export const querySlice = createSlice({
    name : 'query',
    initialState,
    reducers: {
        setQuery : (state,action) => {
            state.queryValue = action.payload
        },
    },
})

export const {setQuery} = querySlice.actions;
export default querySlice.reducer