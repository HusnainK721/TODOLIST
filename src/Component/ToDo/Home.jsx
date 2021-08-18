import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToDoList } from "./ToDoList";
import { AddToDo } from "./AddToDo";
import "./ToDo.css";
import { useState } from "react";

export const Home = () => {
  const [todoitems, setTodoitems] = useState(["learning react", "having fun"]);
  const handleAdd = (newtodo) => {
    setTodoitems([...todoitems, newtodo]);
  };
  return (
    <Card className="home">
      <h5>To Do Item</h5>
      <Row>
        <Col lg={6}>
          <AddToDo handleAdd={handleAdd} />
        </Col>
        <Col lg={6}>
          <ToDoList todoitems={todoitems} />
        </Col>
      </Row>
    </Card>
  );
};
