import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Register } from "../../pages/Register";
import { Login } from "../../pages/Login";
import { Main } from "../../pages/Main";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
};