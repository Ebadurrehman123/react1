import React from "react";

//ya kiya hai ik method jsa usessate hoye hai
//const userContext=React.createContext()

//export default userContext;

//apna context bnaya context kiya hota hai
//apko ik major cheez daga provider
//que kay context hai kiya ap ko variable provide hi to kr ra hai
//to har ik context ik pprovider hota hai
//to usercontext apna ap ma ik provider hai

/*jitna bhi components hai suppose 
suppose <Login/> login components <card/>
hum in sub components ko rape krwa daagae 
hmare is usercontext sa <userContect/>
to ya ban jaega provider 
proder sa murad ap jo bhi component is ka andr hai un sab
ko globaluserContext ka access mil jae ga

jab context ap ka ban gyaya us ka sat ik provider bhi bnana
parta hai
provider que jo kay data provide krae ga
*/
import React from "react";
const UserContext=React.createContext()

export default UserContext;