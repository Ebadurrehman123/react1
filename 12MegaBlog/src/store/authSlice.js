import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducer:{ 
        login:(StaticRange,action) => {
            State.status = true;
            State.userData = action.payload.userData;

        }
    }
})


export default authSlice.reducer;