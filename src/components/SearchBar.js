import React, { useState } from "react";
import { Jumbotron, Container, Col, Form, Button } from 'react-bootstrap';

const SearchBar = () => {
    const [searchedInput, setSearchInput] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchedInput) {
            return false;
        }

        try {
            const response = searchedInput

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

        } catch (err) {
            console.error(err);
        }

        setSearchInput('');
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
        </>
    )
}

export default SearchBar