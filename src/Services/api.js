import axios from 'axios'
import { API_URL} from "../constants/constants"



export const getRecipes = async(searchedQuery)=>{
    try{
      // for spoonacular api
      // let response = await axios.get(API_URL,{
      //   params: {
      //     query: searchedQuery,
      //     apiKey: API_KEY,
      //   },
      // })
      
      let response =  await axios.get(`${API_URL}/search?q=${searchedQuery}`)

      return response.data;

    }catch (error){
        console.log("error while calling the api",error.message)
        return error.response
    }
}



export const getRecipe = async(searchedQuery)=>{
  try{
    
    let response =  await axios.get(`${API_URL}/get?rId=${searchedQuery}`)

    return response.data;

  }catch (error){
      console.log("error while calling the api",error.message)
      return error.response
  }
}