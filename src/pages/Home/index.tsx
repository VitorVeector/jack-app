import { ContainerStyle } from "./style"
import { CustomButton as Button } from "../../components/Button"
import { useNavigate } from "react-router-dom";


export const Home = () => {
    const navigate = useNavigate();

    return (
        <ContainerStyle>
            <h1 className="titleHome">welcome to crud!</h1>
            <div className="btnHome">
                <Button 
                    onClick={() => navigate("/register")}
                    variant="contained" color="secondary" size="large">Register</Button>
                <Button 
                    onClick={() => navigate("/login")}
                    variant="outlined" color="secondary" size="large">Login</Button>
            </div>
        </ContainerStyle>
    )
}