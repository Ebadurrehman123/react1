import React,{usestate} from "react";
import {link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input,Logo} from "./index"
import {useDispatch} from "react-redux"
import authServices from "../appwrite/auth"
import { useForm } from "react-hook-form";


function Login() {
    return (
        <div>Login</div>
    )
}

export default Login