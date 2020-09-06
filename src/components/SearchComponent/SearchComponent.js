import React, { Component } from "react";
import { Form, FormControl, Button,Col } from "react-bootstrap";
export default class SearchComponent extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Row>
              <Col xs = {3}></Col>
            <Col xs={4}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-8"
              />
            </Col>
            <Col xs={3}>
              <Button variant="outline-success">Search</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}
