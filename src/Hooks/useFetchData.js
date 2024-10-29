import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true); 

    fetch(url)
      .then(response => response.json())
      .then(json => {
        
          setData(json);
          setLoading(false); 
        
      })
      .catch(error => {
        console.error("Fejl ved hentning af data: ", error);
        setLoading(false); 
      });
      
  }, [url]);

  return { data, loading }; 
}

export default useFetchData;
