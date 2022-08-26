import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { Navbar, DcPage, MarvelPage } from '../heroes';


export const AppRouter = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="marvel" element={ <MarvelPage/> } />
            <Route path="dc" element={ <DcPage /> } />

            <Route path="login" element={ <LoginPage /> } />
            <Route path="/" element={ <Navigate to="/login" /> } />
        </Routes>
        </>
    )
}
