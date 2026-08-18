//store bnanay ka ik process kai
//sub sa phelay ap ko configure store lay kr ana hai
//kui ka wo method hai jo is sa kam kr tha hai
//to hum lakr atay configure store redux toolkit sa
//ab store ban gya hai lekin ya properly tyar nai hai usecase kay liyae
//hum is method ko use krta hwa ik variabe ko export krta hai

//confiigure store ik method hai jo object hi lata hai mostly

//ab next step bnatay hai reduces
//lekin redux toolkit kay andr reducer bnta hai wo thora alag hai
//hum us ko bolta hai slices 

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
Store bnanay sa ik application ka usually ik store hota hai
 har application ik store hota hai js ko bola jata hai 
 singleSorceoftruth ab us kay andr kiya chaiye ik
 configureStore chaie js sa apka store configure hojata hai
 js kay andr object hai abi hmare pas ik hi key value property hai

 ham features ko slice boltay hai slice kay liya ik method hai create slice

 hma slice bnana ka liya usually 3 cheezay chaie
 1 name:
 2 initialState,
 3 reducer ki pori list chaie hoti hai jojo kaam
 krnay walay ho to sab sa phelay initial state bnaie
 hoskta hai todo ik empty array ho ya kuch or ho koi data structure ho

 to ham na data structur liya hai array
 us kay baad name diya todo 

 to name diya ham na todo initial state value day di
 or us kay baad diya hamna reducer jo kay ik
 object hai uskay andr jitnay chae key function daal sktay ho
 keyvalue keyfunction 
 function kay andr do cheezo ka acces milta hai
 ik state milta hai or ik action milta hai

 state kay andr apko updated state value in the store milti hai
 or action kay andr ap ko kiya milta hai
 action.payload kafi or bhi cheeza milti hai
 ik todo bnaya or action.payload ma say todi ki value nikal li
 jobhi text tha id mana nano id sa bna li
 ab muja pta hai state ka access ha hi state kay andr push krdo

 ab hama kiya krna hai export krna hai
 export ma hama kiya chaie hota hai ik to
 individual functionality agr ya pr ap kay 10 reducer hai 
 to 10 reducer export krna parray gai
 kui kay apko nai pta konsa component ma konsa wala reducer use hwa hai
 or ik chaie apko saray reducer ka main source export krna
 ya mainsorce is liya export kr ra hai iis ko kaam ma lana hai
 apna store kay andr
 to pir hm store kay andr gae or bola ya hai reducer ki list

 ab component ma jana tha 
 component ma do cheezay thi kay value layni hai ya bajni hai
 ab addtodo kay andr value bhejni hai
 bhejnay kay liye mera pass hai dispatch
 dipatch kiya hai ik method hai is dispatch pass jobhi reducer hai
 to apnay reducer import kiya or dispatch kay throw us reducer ko bhej diya

 ab value lani kasay hai
 ap kay pas selector hai kay value select kr lo
 ab values select krni hai kai sa to select kro gai
 value lani hai to state ka access chaie hoga
 state ko jo callback hota hai us ka access milta hai
 or us kay andr jo bhi pick krna hai kr lo
 hoskta hai state ka andr ap kay pas 
 todos ho auth ho,product ho catagries ho,
 jo bhi value chaiya wo particularly pick krka 
 variable ma laylo
 ab variable ma agi value to us kay baad pure js hai
 */