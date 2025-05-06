import React from "react";
import { useEffect, useState } from "react";

const API = () => {

    const [advice, setAdvice] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch("https://catfact.ninja/fact");
            const data = await response.json();
            setAdvice(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const showAdvice = () => {
        fetchData();
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            showAdvice();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-600 text-gray-50 ">
            <h1 className="mb-20 font-bold font-serif text-2xl">Ask The Oracle</h1>
             <input 
                placeholder="What do you want to ask The Oracle?" 
                className="bg-gray-200  mb-8 max-w-100 text-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="inline-full-name" 
                type="text"
                onKeyDown={handleKeyDown}
             />
            <button 
                onClick={showAdvice} 
                className="bg-blue-500 hover:bg-blue-700 mb-8 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
                Ask </button>
            <p className="max-w-100"><span className="font-bold text-amber-300">The oracle's advice: </span>{advice.fact}</p>
        </div>



    );
};

export default API;