import React, { useEffect, useState } from 'react'
import { getRecipe } from '../Services/api'
import {Link, useParams} from 'react-router-dom'
import {Grid,Button,Image,Header,Segment} from 'semantic-ui-react'
import Loader from '../Css Loader/Loader'

function RecipeItemDetails() {

    const [recipeDetail,setRecipeDetail] = useState({});

    const {recipeId} = useParams();

    useEffect(()=>{
        const getData = async ()=>{
            let result = await getRecipe(recipeId)
            if(result && result.recipe){
                setRecipeDetail(result.recipe)
            }
        }
        getData();
    },[])

  return (
    Object.keys(recipeDetail).length > 0 ? 
    <Grid container stackable columns={2} className='relative top-20'>
        <Grid.Column>
            <Button
                as={Link}
                to={'/recipe'}
                content="Back to Recipes"
                color='blue'
                style={{marginBottom: 40}}
            />
            <Image src={recipeDetail.image_url}/>
        </Grid.Column>

        <Grid.Column>
            <Header size="medium">{recipeDetail.title}</Header>
            <p>Provided By {recipeDetail.publisher}</p>
            <Button
                as={"a"}
                href={recipeDetail.publisher_url}
                target="_blank"
                content="Publisher Web Page"
                color='blue'
            />
            <Button
                as={"a"}
                href={recipeDetail.source_url}
                target="_blank"
                content="Recipe URL"
                color='orange'
            />

            <Header size="large" content="Ingredients" />
            <Segment.Group>
                {
                    recipeDetail && recipeDetail.ingredients.map(data => (
                        <Segment>
                            <h5>{data}</h5>
                        </Segment>
                    ))
                }
            </Segment.Group>
        </Grid.Column>
    </Grid> : <div className='relative flex justify-center items-center top-72'><Loader /></div>
  )
}

export default RecipeItemDetails
