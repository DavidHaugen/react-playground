import React, { useState, useEffect, useContext } from 'react';
import CategoryContext from './Context';

export default function Dashboard(props) {
  const [dog, setDog] = useState('Loading...');
  const [loading, setLoading] = useState(false);
  const categories = useContext(CategoryContext);

  useEffect(
    () => {
      setDog('Loading...');
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
          setDog(<img src={data.message} alt='A dog'/>);
          setLoading(false);
        });
    },
    [loading]
  );

  return (
    <div>
      <h1>{props.user.username}'s Dashboard</h1>
      <p>{localStorage.getItem('user')}'s Dashboard</p>
      <p>{dog}</p>
      <p>
        <button onClick={e => setLoading(true)}>Another Image</button>
      </p>
      <ul>
        {categories.map((category, key) => (
          <li key={key}>{category}</li>
        ))}
      </ul>
    </div>
  );
}
