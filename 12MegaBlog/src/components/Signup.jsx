import React,{useState} from "react";
import AuthService from "../appwrite/auth";
import {link,useNavigate} from 'react-router-dom'
import { login } from "../store/authSlice";
import {button,input,logo} from './index'
import {useDispatch} from 'react-hook-form'
import { useForm } from "react-hook-form";
import { Input } from "postcss";



function Signup(){
    const navigate = useNavigate()
    const [error,setError] = useState("")
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()

    const createAccount = async(data) => {
        setError("")
        try{
            const userData = await AuthService.createAccount
            (data)
            if (userData) {
                const userData = await AuthService.
                getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        }catch (error) {
            setError(error.message)
        }
    }

    return(
        <div className="flex item-center justify-center">
            <div className={`mx-auto w-full max-w-lg
            bg-gray-100 rounded-xl p-10 border border-black/10`}>
            </div>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-fullmax-w-[100px]">
                    <logo width="100%"/>
                </span>
            </div>
            <h2 className="text-center text-2xl 
            font-bold leading-tight ">sign up to your 
            accont</h2>
            <p className="mt-2 text-center text-base 
            text-black/60">
                Already have an account?&nbsp;
                <link
                    to="/signup"
                    className="font-medium text-primary
                    transition-all duration-200
                    hover:underline"
                >
                    Sign In
                </link>
            </p>
            {error && <p className="text-red-600 mt-8
            text-center">{error}</p>}

            <form onSubmit={handleSubmit(create)}>
                <div className="space-y-5">
                    <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    {...register("name",{
                        required:true,
                    })}
                    />
                </div>
            </form>
        </div>
     
    )
}

export default Signup