import { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthPayload } from "../store/reducers/authSlice";

export default function Login() {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if(isAuth){
            navigate('/')
        }

    });
    const loginUser = (e) => {
        e.preventDefault();
        localStorage.setItem('user-token', 'token');
        dispatch( setAuthPayload(true))
        // setTimeout(()=> {
        //     navigate('/')
        //   },500)
    }

    return (
        <Container fluid="md">
            <Form onSubmit={loginUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

    )
}