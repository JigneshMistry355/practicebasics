'use client'

import React, { useCallback, useState } from "react";

export default function Counter() {

    const [counter, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <p>Count : {counter}</p>
            <button 
                className="px-8 py-4 border-2 rounded-full"
                onClick={increment}>
                    +
            </button>
        </div>
    );
}