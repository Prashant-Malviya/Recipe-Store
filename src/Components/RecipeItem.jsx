import React from 'react'
import { Link } from 'react-router-dom'
import {Card,Button} from 'semantic-ui-react'

function RecipeItem({recipe}) {
  return (
    <Card>
        <img src={recipe.image_url} alt='recipe-thumbnail' className='h-60'  />

        <Card.Content>

          <Card.Header content={recipe.title} />

          <Card.Description>
            <h4>{recipe.publisher}</h4>
          </Card.Description>
</Card.Content>
          <Card.Content>
            <Button
            as={Link}
            to={`/recipe/${recipe.recipe_id}`}
            content="Details"
            color="blue"
            size="tiny"
            className='my-3'
             />
            <Button
            href={recipe.source_url}
            target="_blank"
            content="Recipe Source"
            color="green"
            size="tiny"
            className='my-3'
             />
          </Card.Content>
        
    </Card>
  )
}

export default RecipeItem
