import React from "react";
import { useHistory } from "react-router-dom";
export default function Register() {
  const history = useHistory();
  return (
    <div>
      Register
      <br />
      <label>Name</label>
      <input type="text" />
      <label>Password</label>
      <input type="text" />
      <hr />
      <button>go</button>
      <button
        onClick={() => {
          history.push("/login");
        }}
      >
        login
      </button>
    </div>
  );
}
