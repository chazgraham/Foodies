import React, { useState, useEffect } from "react";
import { Container, Button, Card, ListGroup, CardGroup, Modal, Row } from 'react-bootstrap';

const RandomRecipes = (props) => {

    const [randomRecipes, setRandomRecipes] = useState([])

    const getRandom = async (e) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=f45007eefd874c71bd0a103aa764db2d&&number=4&addRecipeInformation=true`)

        if (!response.ok) {
            throw new Error('something went wrong!');
        }

        const recipes = await response.json();
        console.log(recipes);
        const recipe = recipes.recipes;
        console.log(recipe)

        const recipeData = recipe.map((recipe) => ({
            title: recipe.title,
            image: recipe.image,
            summary: recipe.summary,
            dishTypes: recipe.dishTypes,
            servings: recipe.servings,
            analyzedInstructions: recipe.analyzedInstructions
        }))

        setRandomRecipes(recipeData);
    }

    useEffect(() => {
        getRandom()
    }, [])

    //handles detail model
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [recipe, setRecipe] = useState([])
    const [recipeSteps, setRecipeSteps] = useState([])

    const showRecipeSteps = (recipe) => {
        console.log(recipe)
        const postRecipe = recipe
        console.log(postRecipe)
        const postRecipeSteps = postRecipe.analyzedInstructions[0].steps;
        console.log(postRecipeSteps)

        setRecipe(postRecipe)
        setRecipeSteps(postRecipeSteps)

        handleShow()
    }

    return (
        <>
            <Container>
                <h2 className='random_h2'>
                    Need some Ideas?
                </h2>
                <CardGroup lg={8}>
                    <Row lg={'auto'} className="g-4">
                        {randomRecipes.map((recipe) => (
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={recipe.image} alt={`${recipe.title}`} />
                                <Card.Body>
                                    <Card.Title>{recipe.title}</Card.Title>
                                    <Card.Text></Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Dish type- {recipe.dishTypes}</ListGroup.Item>
                                    <ListGroup.Item>{recipe.servings} servings</ListGroup.Item>
                                </ListGroup>
                                <Button className='btn-2' type='submit' variant="success" size='lg' onClick={() => showRecipeSteps(recipe)}>
                                    Crafting Instructions
                                </Button>
                            </Card>
                        ))}
                    </Row>
                </CardGroup>
            </Container>
            <div className="random_btn"><Button onClick={() => getRandom()}>Randomize</Button></div>
            <Modal
                show={show} onHide={handleClose}
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {recipe.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>
                        Summary
                    </h4>
                    <div>{recipe.summary}</div>
                    <h4>Steps</h4>
                        {recipeSteps.map((recipeSteps) => (
                            <li type="1" key={recipeSteps.step}>{recipeSteps.step}</li>
                        ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default RandomRecipes;