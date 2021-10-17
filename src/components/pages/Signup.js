import React, { useRef } from 'react'
import { Form, Button, Card, Container } from 'react-bootstrap'

function Signup()  {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
        <>  
            <h1 className="d-flex align-items-center justify-content-center p-3">Coming Soon!</h1>
            <Container 
            className="d-flex align-items-center justify-content-center"
            style ={{minHeight: "100vh"}}
            >
                
                <div className ="w-100" style ={{ maxWidth: "400px" }}>
                    <Card className="bg-dark">
                        <Card.Body>
                        
                            <h2 className ="text-center mb-4">Sign Up</h2>

                            <Form>
                                <Form.Group id ="email">
                                    <Form.Label className="text-white">Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required></Form.Control>
                                </Form.Group>

                                <Form.Group id ="password">
                                    <Form.Label className="text-white">Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required></Form.Control>
                                </Form.Group>

                                <Form.Group id ="password-confirmation">
                                    <Form.Label className="text-white">Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                                </Form.Group>

                                <Button className="w-100" type="submit">Sign Up</Button>
                            </Form>

                        </Card.Body>
                    </Card>
                    <div className ="w-100 text-center mt-2 text-white">
                        Already have an account? Log In
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Signup
