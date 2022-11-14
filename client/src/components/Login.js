import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function Login() {
  const [, setUser] = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  let history = useHistory();
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
        res.json().then((response) => {
          setUser(response);
          history.push("/");
        });
      } else {
        console.log(res);
      }
    });
  }
  return (
    <Card body style={{ backgroundColor: "#36393F", width: "36rem" }}>
      <CardTitle
        className={"text-center"}
        style={{ fontSize: "25px", color: "white" }}
      >
        Welcome back!
      </CardTitle>
      <CardText
        className={"text-center"}
        style={{ fontSize: "16px", color: "#B9BBBE" }}
      >
        We're so excited to see you again!
      </CardText>
      <CardText>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label
              for={"inputUsername"}
              style={{ fontSize: "12px", color: "#B9BBBE" }}
            >
              USERNAME
            </Label>
            <Input
              id={"inputUsername"}
              name={"username"}
              value={formData.username}
              onChange={(e) => handleFormDataInput(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label
              for={"inputPassword"}
              style={{ fontSize: "12px", color: "#B9BBBE" }}
            >
              PASSWORD
            </Label>
            <Input
              id={"inputPassword"}
              name={"password"}
              value={formData.password}
              onChange={(e) => handleFormDataInput(e)}
            />
          </FormGroup>
        </Form>
      </CardText>
      <Button type={"submit"}>Log In</Button>
      <CardText style={{ fontSize: "14px", color: "#A3A6AA" }}>
        Need an account? Register
      </CardText>
    </Card>
  );
}

export default Login;
