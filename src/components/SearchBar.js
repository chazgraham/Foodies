import React, { useState } from "react";
import { Jumbotron, Container, Col, Form, Button, Card, ListGroup, CardGroup } from 'react-bootstrap';

const SearchBar = () => {
    const [SearchedRecipe, setSearchRecipe] = useState([]);
    const [searchedInput, setSearchInput] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchedInput) {
            return false;
        }

        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f45007eefd874c71bd0a103aa764db2d&query=${searchedInput}&number=5&addRecipeInformation=true`)
            console.log(response)

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const recipes = await response.json();
            console.log(recipes);
            const recipe = recipes.results;

            const recipeData = recipe.map((recipe) => ({
                title: recipe.title,
                image: recipe.image,
                summary: recipe.summary,
                dishTypes: recipe.dishTypes,
                preparationMinutes: recipe.preparationMinutes,
                servings: recipe.servings
            }))

            setSearchRecipe(recipeData)
            setSearchInput('');

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <Jumbotron fluid className='text-light'>
                <Container>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    name='searchInput'
                                    value={searchedInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    type='text'
                                    size='lg'
                                    placeholder='Search for a game'
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Button className='btn-2' type='submit' variant="success" size='lg'>
                                    Submit Search
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </Jumbotron>

            <Container>
                <h2 className='viewing'>
                    {SearchedRecipe.length
                        ? `Viewing ${SearchedRecipe.length} results:`
                        : ''}
                </h2>
                <CardGroup>
                    {SearchedRecipe.map((recipe) => (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={recipe.image} alt={`${recipe.title}`} />
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Dish type- {recipe.dishTypes}</ListGroup.Item>
                                <ListGroup.Item>preperation Time- {recipe.preparationMinutes} minutes</ListGroup.Item>
                                <ListGroup.Item>servings- {recipe.servings}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    ))}
                </CardGroup>
            </Container>
        </>
    )
}

export default SearchBar