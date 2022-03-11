import React from 'react';
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div className="App">
      <header className="App-header">
      <div className='signbox'>
      <Form>
      <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="email"
              required
            />
        </Form.Group>
        
        <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
            <Form.Control
              type="password"
              placeholder="confirm password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicButton">
          <Button className='button' variant='success' type="submit">
            SINGN UP
          </Button>
          </Form.Group>

          <Form.Group>
            <Form.Text className="text-muted">
              <Link className="link" to="/sign-in">
                Have An Account?
              </Link>
            </Form.Text>
          </Form.Group>

      </Form>
        </div>
      </header>
    </div>
  );
}

export default signup;
