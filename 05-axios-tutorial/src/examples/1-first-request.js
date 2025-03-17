import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
// const url = 'https://www.course-api.com/react-store-products';
const url = 'https://e-commerce-api-v3c3.onrender.com/api/v1/products/';

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    console.log('first axios request');
    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
