import styled from 'styled-components'
import { Form } from "react-bootstrap"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #0080807f;
`
const Title = styled.h1`
    /* font-size: 24px; */
    font-weight: 300;
`
// const Form = styled.form`
//     display: flex;
//     flex-wrap: wrap;
// `

// const Input = styled.input`
//     flex: 1;
//     min-width: 40%;
//     margin: 20px 10px 0;
//     padding: 10px;
// `
const Agreement = styled.span`
    font-size: 1rem;
    margin: 20px 0;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Link = styled.a`
    text-decoration: underline;
    cursor: pointer;
`


const Register = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='form-container'>
            <div className="form-wrapper rounded">
                <Form className='form' onSubmit={handleSubmit}>
                    <h1 style={{marginBottom: "30px"}}>Sign Up</h1>
                    <Form.Control type='text' placeholder='Full name' className='shadow-none' />
                    <Form.Control type='text' placeholder='Username' className='shadow-none' />
                    <Form.Control type='email' placeholder='Email' className='shadow-none' />
                    <Form.Control type='password' placeholder='Password' className='shadow-none' />
                    <Form.Control type='password' placeholder='Confirm password' className='shadow-none' />
                    <div className='form-inside-div'>
                    <a className='form-links'>Already have account?</a>
                        <span style={{margin: "20px 0"}}>By creating an account, I consent to the process of my personal data in accordance with the <b>PRIVACY POLICY</b></span>
                        <button type="submit">Sign Up</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Register;