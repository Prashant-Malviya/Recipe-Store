import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import RecipeList from '../Components/RecipeList'
import { getRecipes } from '../Services/api'
import {useSelector,useDispatch} from 'react-redux'
import { setRecipesList } from '../store/recipesSlice'
import Loader from '../Css Loader/Loader'



function Recipes() {

    // const [searchedQuery,setSearchedQuery] = useState('tomato');
    const searchedQuery = useSelector((state) => state.query.queryValue)

    const [loading,setLoading] = useState(false);

    // const [recipes,setRecipes] = useState([])

    const dispatch = useDispatch();

    
    const getSearchedResult = async() => {
      setLoading(true);
      let result = await getRecipes(searchedQuery);
      if(result && result.recipes){
        dispatch(setRecipesList(result.recipes))
        setLoading(false);
      }

    }
    
    useEffect(()=>{
      getSearchedResult();
    },[searchedQuery])


    const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (loading) {
        setShowMessage(true);
        setLoading(false); // Stop loading
      }
    }, 5000); // Wait for 5 seconds

    return () => clearTimeout(timeoutId); // Cleanup the timeout
  }, [loading]);
    
    const recipesItems = useSelector(state => state.recipeLists.recipesList);
    console.log("recipes-----------", recipesItems)

  return (
    <div>
      <Search />
      {/* <RecipeList /> */}

      {/* {
        loading ? <div className='relative flex justify-center items-center lg:top-72 top-52'><Loader /></div> :  <RecipeList />     } */}

        {loading ? (
        <div className='relative flex justify-center items-center lg:top-72 top-52'><Loader /></div>
      ) : (
        showMessage ? (
          <h1 className="relative text-center top-48 text-red-700 z-50">Please Search With Right Ingredients</h1>
        ) : (
          <RecipeList />
        )
      )}
      
    </div>
  )
}

export default Recipes
