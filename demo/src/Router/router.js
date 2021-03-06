import { BrowserRouter, Routes, Route } from 'react-router-dom';
import config from '../config/config';
import Register from '../Component/register'
import Login from '../Component/login'
import LoadBackground from '../Component/fetch'
import Dashboard from '../Component/dashboard'
import Profile from '../Component/profile'
import EditProfile from '../Component/editProfile'
import LoginApi from '../Component/loginApi'
import connectWallet from '../Component/test'




const RouterComponent = () => {
    return (
    
    <BrowserRouter >
            <div> 
                <Routes>
                    {/* <Route path={`${config.baseUrl}`} element={<Home/>} /> */}
                    <Route exact path={`${config.baseUrl}register`} element={<Register/>} />
                    <Route exact path={`${config.baseUrl}dashboard`} element={<Dashboard/>} />
                    <Route exact path={`${config.baseUrl}profile`} element={<Profile/>} />
                    <Route exact path={`${config.baseUrl}editprofile`} element={<EditProfile/>} />
                    <Route exact path={`${config.baseUrl}`} element={<Login/>} /> 
                    <Route exact path={`${config.baseUrl}fetch`} element={<LoadBackground/>} /> 
                    <Route exact path={`${config.baseUrl}loginapi`} element={<LoginApi/>} /> 
                    <Route exact path={`${config.baseUrl}connectwallet`} element={<connectWallet/>} /> 


                </Routes>
            </div>
    </BrowserRouter>
    )
}
export default RouterComponent;