import React from "react";
import { Container,Logo,LogoutBtn} from "../index";
import {Link} from 'react-redux'
import { useNavigation } from "react-router-dom";


function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const vaItems = [
        {
          name:'Home'  ,
          slug:'/',
          active:true
        },
        {
           name:'Login',
           slug:'/login',
           active:!authStatus,
        },
        {
            name:"Signup",
            slug:"/signup",
            active:!authStatus,
        },
        {
            name:"All posts",
            slug:"/signup",
            active:!authStatus,
        },
        {
            name:"Add post",
            slug:"/add-post",
            active:authStatus,
        },
    ]


    return(
        <div> Header</div>
    )
}

export default Header