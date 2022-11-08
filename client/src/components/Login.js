import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";

function Login() {
  const [, setUser] = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  function handleFormDataInput(e) {
    setFormData({ ...formData, [`${e.target.name}`]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((response) => setUser(response));
      } else {
        console.log(res);
      }
    });
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Login Form</p>
        <p>
          <input
            name={"username"}
            placeholder={"username"}
            value={formData.username}
            onChange={(e) => handleFormDataInput(e)}
          />
        </p>
        <p>
          <input
            name={"password"}
            placeholder={"password"}
            value={formData.password}
            onChange={(e) => handleFormDataInput(e)}
          />
        </p>
        <p>
          <button type={"submit"}>Login!</button>
        </p>
      </form>
    </div>
  );
}

export default Login;
