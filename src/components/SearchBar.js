import React, { useState } from "react";
import { Jumbotron, Container, Col, Form, Button, Card, ListGroup, CardGroup, Modal, Row } from 'react-bootstrap';

const SearchBar = (props) => {
    const [SearchedRecipe, setSearchRecipe] = useState([]);
    const [searchedInput, setSearchInput] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchedInput) {
            return false;
        }

        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f45007eefd874c71bd0a103aa764db2d&query=${searchedInput}&number=25&addRecipeInformation=true`)
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
                servings: recipe.servings,
                analyzedInstructions: recipe.analyzedInstructions
            }))

            setSearchRecipe(recipeData)
            setSearchInput('');

        } catch (err) {
            console.error(err);
        }
    }

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
                <CardGroup lg={8}>
                <Row lg={'auto'} className="g-4">
                    {SearchedRecipe.map((recipe) => (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={recipe.image} alt={`${recipe.title}`} />
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Dish type- {recipe.dishTypes}</ListGroup.Item>
                                <ListGroup.Item>servings- {recipe.servings}</ListGroup.Item>
                            </ListGroup>
                            <Button className='btn-2' type='submit' variant="success" size='lg' onClick={() => showRecipeSteps(recipe)}>
                                Crafting Instructions
                            </Button>
                        </Card>
                    ))}
                    </Row>
                </CardGroup>
            </Container>
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

export default SearchBar