import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch((err) => setStatus({ error: err.message }));
  }, []);

  return (
    <div>
      <h1>Full Stack App</h1>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
}

export default App;
