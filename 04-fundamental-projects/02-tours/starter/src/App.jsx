const url = 'https://www.course-api.com/react-tours-project';
import { useState, useEffect } from 'react';
import Tours from './Tours';
import Loading from './Loading';
const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const removeTour = (id) => {
    console.log(id);
    setTours(() => tours.filter((tour) => tour.id !== id));
  };
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        return;
      }
      const result = await resp.json();
      setTours(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" style={{ marginTop: '2rem' }} onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} fetchTours={fetchTours} />
    </main>
  );
};
export default App;
