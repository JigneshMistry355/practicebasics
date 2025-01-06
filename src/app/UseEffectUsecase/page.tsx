'use client'

import React, { useEffect, useState } from "react";
import { AxiosInstance } from '../utils/axiosInstance'

type Post = {
    id : string,
    title : string,
}

interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function GetData(){

    const [data, setData] = useState<Post[]>([]);
    const [loading, isLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setData(data);
    //             isLoading(false);
    //         })
    // },[]);

    useEffect(() => {
        AxiosInstance.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setData(response.data);
                isLoading(false);
            })
            .catch((error) => {
                setError(error.message);
            })
    },[])


    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const [inputValue, setInputValue] = useState('');

   

    return (
        <>  
            { /**    Conditional Rendering    **/

                    loading ? (
                        
                    <div className="flex justify-center items-center min-h-screen">
                        <p className="font-mono size-72">...Loading</p>
                    </div>

                )   :   (

                    <>

                        <div className="flex justify-center p-7 ">
                            <input 
                                className="border-2 mx-4 w-64"
                                type="text"
                                value={inputValue}
                                onChange={(event) => setInputValue(event.target.value)}
                                placeholder="Enter some text to see changes"
                                
                            />

                            <h1 className="font-bold">
                                {inputValue} Timer : {count}
                            </h1>
                        </div>

                        <div className="flex m-8 justify-center">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="border-black border-2 px-6 text-center">No.</th>
                                        <th className="border-black border-2 px-6 text-center font-bold">Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {data.map((item) => (
                                        // To display item.id in a column, attach key to <tr>
                                        <tr key={item.id}>

                                            {/* To display item.id in a row, attach key to <td> */}
                                            <td className="border-black border-2 px-6 text-center" >
                                                {item.id}
                                            </td>
                                            <td className="border-black border-2 px-6" >
                                                {item.title}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </>
                    
                )
            } 


            
        </>
    );
}