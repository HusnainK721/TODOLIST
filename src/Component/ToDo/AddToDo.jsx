import React from "react";
import { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "./ToDo.css";

export const AddToDo = ({ handleAdd }) => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <Card className="addtodo">
      <Row>
        <Col md={10}>
          <Form.Control
            type="text"
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
          ></Form.Control>
        </Col>
        <Col>
          <Button
            onClick={() => {
              handleAdd(newTodo);
              setNewTodo("");
            }}
            disabled={newTodo == ""}
          >
            ADD
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
