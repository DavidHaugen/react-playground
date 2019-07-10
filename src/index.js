import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './RegistrationForm';
import Dashboard from './Dashboard';
import './styles.css';

import CategoryContext from './Context';

function App() {
  const [user, setUser] = useState({ username: null });

  const categories = useContext(CategoryContext);
  let categoryNames = ['food', 'art', 'travel'];
  categories.splice(0);
  categories.push(...categoryNames);

  const storeUser = user => {
    localStorage.setItem('user', user.username);
    setUser(user);
  };

  const logout = () => {
    localStorage.clear();
    setUser({ username: null });
  };

  return (
    <div className="App">
      <h1>Hello {user.username}</h1>
      {user.username ? (
        <div>
          <Dashboard user={user} />
          <p>
            <button onClick={() => logout()}>Logout</button>
          </p>
        </div>
      ) : (
        <RegistrationForm storeUser={storeUser} />
      )}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
