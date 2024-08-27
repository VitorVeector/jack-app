import { TextField } from "@mui/material"
import { Container } from "./style"

export const Register = () => {
    return(
        <Container>
            <h3>register user</h3>
            <div className="input">
                <TextField className="nameInput"/> 
                <TextField className="emailInput"/> 
                <TextField className="passwordInput"/> 
                <TextField className="confirmPasswordInput"/> 
            </div>
        </Container>
    )
}