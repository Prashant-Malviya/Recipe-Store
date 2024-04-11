import {configureStore} from '@reduxjs/toolkit'
import queryReducer from './querySlice'
import recipesListsReducer from './recipesSlice'

const store = configureStore({
    reducer:{
        query : queryReducer,
        recipeLists : recipesListsReducer,
    },
})

export default store