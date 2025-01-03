'use client'

import { useState } from "react";

export default function MyCount(){

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div >
            
            <button
              className="border-2 px-4 py-2 rounded-full"
              type="button"
              onClick = {decrement}
            >
                -
            </button>

            <label className="px-8">
                Count : {count}
            </label>

            <button
              className="border-2 px-4 py-2 rounded-full"
              type="button"
              onClick = {increment}
            >
                +
            </button>
           
        </div>
    );
}