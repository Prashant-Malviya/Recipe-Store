import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    recipesList : []
}

export const recipesSlice = createSlice({
    name : 'recipeLists',
    initialState,
    reducers : {
        setRecipesList  : (state,action)=>{
            state.recipesList = action.payload
        }
    }
})

export const {setRecipesList} = recipesSlice.actions;
export default recipesSlice.reducer