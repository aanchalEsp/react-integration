import React from "react";
import {useState, useEffect} from 'react';

function LoadBackground() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=15";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
  }, []);

 useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((user) => (
          <h1>
            {user.name.first} {user.name.last}
          </h1>
        ))
      )}
    </div>
  );
}

export default LoadBackground;