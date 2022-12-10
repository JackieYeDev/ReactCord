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
      //console.log(res);
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
    <Card
      body
      style={{
        backgroundColor: "#36393F",
        width: "36rem",
        margin: "0 auto",
        float: "none",
        marginBottom: "10px",
      }}
    >
      <CardTitle
        className={"text-center"}
        style={{ fontSize: "24px", color: "white" }}
      >
        Welcome back!
      </CardTitle>
      <CardText
        className={"text-center"}
        style={{ fontSize: "16px", color: "#B9BBBE" }}
      >
        We're so excited to see you again!
      </CardText>
      <CardText
        style={{ fontSize: "12px", color: "#B9BBBE", textAlign: "left" }}
      >
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
              type={"password"}
              value={formData.password}
              onChange={(e) => handleFormDataInput(e)}
            />
          </FormGroup>
          <Button
            type={"submit"}
            style={{ width: "100%", background: "#5865F2" }}
          >
            Log In
          </Button>
        </Form>
      </CardText>

      <CardText
        style={{ fontSize: "14px", color: "#A3A6AA", textAlign: "left" }}
      >
        Need an account? <a href={"/signup"}>Register</a>
      </CardText>
    </Card>
  );
}

export default Login;
