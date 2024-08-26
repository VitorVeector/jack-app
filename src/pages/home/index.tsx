import { ContainerStyle } from "./style"
import { CustomButton as Button } from "../../components/Button"

export const Home = () => {
    return(
        <ContainerStyle>
            <h1 className="titleHome">welcome to crud!</h1>
            <div className="btnHome">
                <Button variant="contained" color="secondary" size="large">Register</Button>
                <Button variant="outlined" color="secondary" size="large">Login</Button>
            </div>
            
        </ContainerStyle>
    )
}