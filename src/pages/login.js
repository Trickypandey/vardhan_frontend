import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const [errors, setError] = useState({});

  const resetData = () => {
    setData({
      email: "",
      password: "",
    });
  };

  return (
    <Container>
      <Row className="mt-4 justify-content-center">
        <Col md={6}>
          <Card>
            <CardHeader className="text-center bg-primary text-white">
              <h3>Login Here !!!</h3>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    onChange={(e) => handleChange(e, "email")}
                    value={data.email}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    onChange={(e) => handleChange(e, "password")}
                    value={data.password}
                  />
                </FormGroup>

                <div className="text-center" >
                  <Button color="primary">Login</Button>
                  <Button
                    onClick={resetData}
                    color="secondary"
                    className="ml-2"
                    type="reset"
                  >
                    Clear
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
