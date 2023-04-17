import { Form } from "react-bootstrap";
import styled from "styled-components";


const Link = styled.a`
    
`


const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <div className='form-container'>
            <div className="form-wrapper rounded">
                <Form className='form' onSubmit={handleSubmit}>
                    <h1 style={{marginBottom: "30px"}}>Login</h1>
                    <Form.Control type='text' placeholder='username' className='shadow-none' />
                    <Form.Control type='password' placeholder='password' className='shadow-none' />
                    <div className="form-links">
                        <a className="form-links">Forget password</a>
                        <a className="form-links">Create a new account</a>
                    </div>
                    <div className='form-inside-div'>
                        <button type="submit">LOGIN</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login;