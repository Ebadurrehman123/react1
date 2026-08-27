import React,{usestate} from "react";
import {link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input,Logo} from "./index"
import {useDispatch} from "react-redux"
import authServices from "../appwrite/auth"
import { useForm } from "react-hook-form";
import AuthService from "../appwrite/auth";


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} =useForm()
    const [error,setError] = usestate("")

    const login = async(data) => {
        setError("")
        try {
            const session=await AuthService.login(data)
            if (session) {
                const userData = await authServices.
                getCurrentUser()
                if(userData)dispatch(authLogin(userData))
                    navigate("/")
            }
        }catch (error) {
            setError(error.message)
        }
    }

    return (
        <div
        className='flex items-center justify-center w-full'
        >
            <div className="mx-auto w-full max-w-lg
            bg-gray-100 rounded-xl p-10 border border-black/10"
            >
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full
                    max-w-[100px]">

                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold 
                leading-tight ">sign in to your accont</h2>
                <p className="mt-2 text-center text-base text-black/
                60">
                    Don&apos;t have any account?&nbsp;
                    <link
                        to="/signup"
                        className="font-medium text-primary
                        transition-all duration-200
                        hover:underline"
                        >
                            Sign Up
                    </link>
                </p>
            </div>
        </div>
    )
}

export default Login