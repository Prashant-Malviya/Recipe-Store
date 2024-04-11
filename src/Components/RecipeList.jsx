// import React, { useEffect, useState } from 'react'
import {Container,Header,Grid} from 'semantic-ui-react'
import {useSelector} from 'react-redux'
import RecipeItem from './RecipeItem';

function RecipeList() {

  const searchedQuery = useSelector(state => state.query.queryValue)

  
  // const [recipe,setRecipe] = useState([]);

  const recipes = useSelector(state => state.recipeLists.recipesList) || [];

  return (
    <Container>
      <Header
        size='huge'
        // content={`Recipe List For ${searchedQuery} `}
        textAlign='center'
        className='relative top-36'
      >
        <span className='font-bold text-4xl'><span className='text-blue-700'>{searchedQuery}</span> Recipes</span>
      </Header>

      <Grid columns={4} doubling className='relative top-52 text-black' textAlign='center'>
        {
          Array.isArray(recipes) && recipes.map(recipe => (
            <Grid.Column key={recipe.id}>
              
                <RecipeItem  recipe={recipe} />
            
             
            </Grid.Column>
          ))
        }
      </Grid>
    </Container>
  )
}

export default RecipeList
