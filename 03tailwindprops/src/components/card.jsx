import React from "react";
function Card({username,btntext}){
    //console.log("props",props)
    console.log(username);
    return (
        <>
          <div className="max-w-sm mx-auto mt-10 p-6 rounded-xl shadow-xl bg-black border border-zinc-800">
        <img
          src="https://picsum.photos/400/300?random=90"
          alt="Featured"
          className="w-full h-48 object-cover rounded-lg"
        />

        <h2 className="text-white text-xl font-bold mt-4">
         {username} Modern Design Solutions
        </h2>

        <p className="text-gray-400 mt-2">
          Discover cutting-edge design patterns and UI components.
        </p>

        <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg">
          {btntext}
        </button>
      </div>
    </>
  );
}

export default Card