import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { setUser, googleSignIn, setIsloading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home'
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_url)
                setUser(result.user);
            })
            .finally(() => setIsloading(false))
    }

    return (
        <Container>

            <div className='text-center border border-success py-5 my-5'>
                <h1>Please Log In</h1>
                <Button className='button-color border-0'
                    onClick={handleGoogleSignIn}
                >Sign In With Google</Button>
            </div>
        </Container>
    );
};

export default Login;