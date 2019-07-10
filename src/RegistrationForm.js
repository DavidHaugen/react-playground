import React, { useState, useEffect, useContext } from "react";

export default function RegistrationForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.storeUser({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={e => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
      />
      <input type="submit" />
    </form>
  );
}
