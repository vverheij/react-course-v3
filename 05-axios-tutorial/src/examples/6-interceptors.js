import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

// const url = 'https://www.course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch('/react-store-products');
      console.log(resp1);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
// https://www.course-api.com/react-store-products
