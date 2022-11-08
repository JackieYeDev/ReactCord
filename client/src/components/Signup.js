import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    fullName: "",
    birthday: "",
  });

  function handleSignup(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
        password_confirmation: formData.passwordConfirmation,
        full_name: formData.fullName,
        birthday: formData.birthday,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((response) => console.log(response));
      } else {
        console.log(res);
      }
    });
  }
  function handleInput(e) {
    setFormData({ ...formData, [`${e.target.name}`]: `${e.target.value}` });
  }

  return (
    <div>
      <form onSubmit={(e) => handleSignup(e)}>
        <p>
          <input
            name={"username"}
            placeholder={"Please enter a username"}
            value={formData.username}
            onChange={(e) => handleInput(e)}
          />
        </p>
        <p>
          <input
            name={"password"}
            placeholder={"Please enter a password (6 characters or more)"}
            value={formData.password}
            onChange={(e) => handleInput(e)}
          />
        </p>
        <p>
          <input
            name={"passwordConfirmation"}
            placeholder={"Please re-enter your password"}
            value={formData.passwordConfirmation}
            onChange={(e) => handleInput(e)}
          />
        </p>
        <p>
          <input
            name={"fullName"}
            placeholder={"Please enter your full name"}
            value={formData.fullName}
            onChange={(e) => handleInput(e)}
          />
        </p>
        <p>
          <input
            name={"birthday"}
            value={formData.birthday}
            onChange={(e) => handleInput(e)}
            type={"date"}
          />
        </p>
        <button type={"submit"}>Signup!</button>{" "}
      </form>
    </div>
  );
}
export default Signup;
