import React from "react";
import { useHistory } from "react-router-dom";
export default function Login() {
  const history = useHistory();
  return (
    <div>
      Login
      <br />
      <label>Name</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <hr />
      <button>go</button>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Register
      </button>
    </div>
  );
}
