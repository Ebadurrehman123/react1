import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [User,setUser]=React.useState()
    return(
        //ap jo bhi daata pas kr ra hai wo value ma pass simply ik object pass krduga
        <UserContext.Provider value={{User,setUser}}>  
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
