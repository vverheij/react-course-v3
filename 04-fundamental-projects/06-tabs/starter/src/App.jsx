import { useEffect, useState } from 'react';
import Title from './Title';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';
const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(1);

  // const setCurrentItemHandler = (id) => {
  //   console.log(id);
  //   setCurrentItem(id);
  // };

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(response);
        return;
      }
      const result = await response.json();
      setJobs(result);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
    return () => {};
  }, []);

  {
    /* <Title text="Full Stack Web Developer" /> */
  }
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      {/* button container */}
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
