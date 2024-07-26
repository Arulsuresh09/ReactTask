import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });

    const timer = setInterval(() => {
      console.log('Timer running...');
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); 

  useEffect(() => {
    if (data) {
      console.log('Data has been updated');
    }
  }, [data]);

  return (
    <div>
      <h1>Functional Component with useEffect</h1>
      {loading ? <p>Loading...</p> : <p>{data.title}</p>}
    </div>
  );
};

export default DataFetcher;
