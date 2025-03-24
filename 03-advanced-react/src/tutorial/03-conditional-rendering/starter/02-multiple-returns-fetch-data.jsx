import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const user = await response.json();
      setUser(user);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>There was an error</h3>;
  }

  const { avatar_url, name, bio, url } = user;
  return (
    <section>
      <img src={avatar_url} alt={name} style={{ width: '100px', borderRadius: '25px' }} />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
      <a href={url} target="_blank">
        {url}
      </a>
    </section>
  );
};
export default MultipleReturnsFetchData;
