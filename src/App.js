import { useState, useEffect } from 'react';

function App() {

  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const url = 'https://26c5-220-85-226-110.ngrok-free.app'
    // const url = 'http://localhost:3000'

    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': true,
      }
    })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json()
      })
      .then(data => {
        setData(data)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => setIsLoaded(true))
  }, [])

  if (error) {
    return <p>failed to fetch</p>
  }

  if (!isLoaded) {
    return <p>fetching data...</p>
  }

  return (
    <>
      <h1>Pi Client</h1>
      <p>{data.message}</p>
    </>
  );
}

export default App;
