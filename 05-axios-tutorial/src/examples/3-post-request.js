import { useEffect, useState } from 'react';
import axios from 'axios';
const url = 'https://www.course-api.com/axios-tutorial-post';

const PostRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const postData = async () => {
    try {
      const { data } = await axios.post(
        url,
        {
          name,
          email,
        },
        {}
      );
      // console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email);
    setEmail(email);
    setName(name);
    postData();
  };

  return (
    <section>
      <h2 className="text-center">post request</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          login
        </button>
      </form>
    </section>
  );
};
export default PostRequest;
