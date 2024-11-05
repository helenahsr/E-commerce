import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import Page404 from './pages/Page404/index'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/login" element={ <Login /> }></Route>
                <Route path="/register" element={ <Register /> }></Route>
                <Route path="*" element={ <Page404 /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes