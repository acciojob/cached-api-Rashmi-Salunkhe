import React, { useEffect, useState } from 'react';

const App = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((res) => res.json())
          .then((data) => setPost(data));
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData()
  }, []); // Run the effect only once when the component mounts

  return (
    <div>
      <div>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter input to refetch data'/>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
           <p>Loading...</p>
          {
            post.map((p) => (
              <li key={p.id}>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  )
}

export default App;
