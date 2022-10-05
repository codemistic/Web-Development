import React, { useState } from 'react';
import { Button, Form, Input, Container } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    if(email === "n" && password === "n"){
      navigate("/json");
    }
    else{
      toast.error("Invalid Credentials", {autoClose:3000});
    }
  };

    return (
        <div>
          <Container>
            <h1 style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}>LOGIN</h1>
                      <br />
                      <br />
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <label>EMAIL</label>
                <Input
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  label="email"
                  labelPosition="right"
                />
              </Form.Field>
              <Form.Field>
                <label>PASSWORD</label>
                <Input
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  label="password"
                  labelPosition="right"
                />
              </Form.Field>
              <Button primary>
                LOGIN
              </Button>
            </Form>
          </Container>
        </div>
    );
}

export default Login;
