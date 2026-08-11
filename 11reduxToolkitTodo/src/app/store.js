import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/todoSlice'

export const store =configureStore({
    reducer:todoReducer
})


//overview
/*

Redux ik alag cheez hai or
React Redux alag cheez hai 

redux core library hai or react redux us ka 
implimentation hai wiring krna kay liyae
takay redux or react ki apas ma baat cheet hoskae
ab Redux toolkit hum jab use krta hai
tab kafi kaam hmare automatically ho chukae hotay hai

AB start ka sa krae gai

Store bn