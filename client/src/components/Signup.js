import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    birthday: "",
  });

  let history = useHistory();

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
        email: formData.email,
        birthday: formData.birthday,
      }),
    }).then((res) => {
      if (res.ok) {
        res
          .json()
          .then((response) => console.log(response))
          .then(() => history.push("/login"));
      } else {
        console.log(res);
      }
    });
  }
  function handleInput(e) {
    setFormData({ ...formData, [`${e.target.name}`]: `${e.target.value}` });
  }
  return (
    <Container>
      <Card
        body
        className={"my-2"}
        style={{
          background: "#36393F",
          width: "36rem",
          margin: "0 auto",
          float: "none",
          marginBottom: "10px",
        }}
      >
        <CardTitle
          style={{ color: "#FFFFFF", fontSize: "24px", textAlign: "center" }}
        >
          Create an account
        </CardTitle>
        <Form onSubmit={(e) => handleSignup(e)}>
          <CardText
            style={{
              color: "#B9BBBE",
              fontSize: "12px",
              textAlign: "left",
            }}
          >
            <FormGroup>
              <Label for={"inputEmail"}>EMAIL</Label>
              <Input
                id={"inputEmail"}
                name={"email"}
                value={formData.email}
                onChange={(e) => handleInput(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for={"inputUsername"}>USERNAME</Label>
              <Input
                id={"inputUsername"}
                name={"username"}
                value={formData.username}
                onChange={(e) => handleInput(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for={"inputPassword"}>PASSWORD</Label>
              <Input
                id={"inputPassword"}
                name={"password"}
                type={"password"}
                value={formData.password}
                onChange={(e) => handleInput(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for={"inputPasswordConfirmation"}>CONFIRM PASSWORD</Label>
              <Input
                id={"inputPasswordConfirmation"}
                name={"passwordConfirmation"}
                type={"password"}
                value={formData.passwordConfirmation}
                onChange={(e) => handleInput(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for={"inputBirthday"}>DATE OF BIRTH</Label>
              <Input
                id={"inputBirthday"}
                name={"birthday"}
                value={formData.birthday}
                onChange={(e) => handleInput(e)}
                type={"date"}
              />
            </FormGroup>
          </CardText>
          <Button
            type={"submit"}
            style={{ width: "100%", background: "#5865F2" }}
          >
            Continue
          </Button>
        </Form>
        <Link to={"/login"} style={{ fontSize: "14px", textAlign: "left" }}>
          Already have an account?
        </Link>
      </Card>
    </Container>
  );
}
export default Signup;
