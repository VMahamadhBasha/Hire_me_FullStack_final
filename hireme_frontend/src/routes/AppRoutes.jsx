import { BrowserRouter, Routes,Route } from "react-router-dom";
import LoginPage from "../public/LoginPage";
import RegisterPage from "../public/RegisterPage";
import LandingPage from "../public/LandingPage";


export default function AppRoutes() {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/register" element={<RegisterPage/>}/>
           
        </Routes>
        </BrowserRouter>
        
        </>
    )
}