import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function usernameHandler(event) {
    setUsername(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  function submittionHandler(event) {
    event.preventDefault();
    const loginObject = {
      username: username,
      password: password,
    };

    setUsername("");
    setPassword("");
    console.log(loginObject);
  }

  return (
    <section className="login-container">
      <Link to="/create-account-form">Create account</Link>
      <form onSubmit={submittionHandler} className="form-container">
        <h1>HRStock</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={usernameHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={passwordHandler}
        />
        <button>Login</button>
      </form>
    </section>
  );
}

export default Login;
