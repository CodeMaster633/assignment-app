import { useState, useEffect } from 'react';

function useFetchData(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error - Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log("Error: " +error.message)
            } 
        };

        fetchData();
    }, [url]);

    return { data};
}

export default useFetchData;
