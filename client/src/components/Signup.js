import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";

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
    <Container>
      <Card body className={"my-2"} style={{ width: "36rem" }} color={"36393F"}>
        <CardTitle className={"text-center"}>Create an account</CardTitle>
        <Form onSubmit={(e) => handleSignup(e)}>
          <CardText>
            <FormGroup>
              <Label for={"inputEmail"}>Email</Label>
              <Input
                id={"inputEmail"}
                name={"email"}
                value={formData.email}
                onChange={(e) => handleInput(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for={"inputUsername"}>Username</Label>
              <Input
                id={"inputUsername"}
                name={"username"}
                value={formData.username}
                onChange={(e) => handleInput(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for={"inputPassword"}>Password</Label>
              <Input
                id={"inputPassword"}
                name={"password"}
                type={"password"}
                value={formData.password}
                onChange={(e) => handleInput(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for={"inputPasswordConfirmation"}>Confirm Password</Label>
              <Input
                id={"inputPasswordConfirmation"}
                name={"passwordConfirmation"}
                type={"password"}
                value={formData.passwordConfirmation}
                onChange={(e) => handleInput(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for={"inputBirthday"}>Date of Birth</Label>
              <Input
                id={"inputBirthday"}
                name={"birthday"}
                value={formData.birthday}
                onChange={(e) => handleInput(e)}
                type={"date"}
              />
            </FormGroup>
          </CardText>
          <Button type={"submit"}>Continue</Button>
        </Form>
      </Card>
    </Container>
  );
}
export default Signup;
