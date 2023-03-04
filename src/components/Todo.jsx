import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ListTodo from './ListTodo';


function Todo() {
  const [todolist, setTodolist] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const handleForm = (event) => {
    event.preventDefault()
    if (inputTask) {
      setTodolist(todolist => [...todolist, inputTask]);
      setInputTask('');
    }

  }

  const removeTask = (i) => {
    console.log('remove index', i)
    let array = [...todolist];
      array.splice(i,1);
       setTodolist(array);
  }

  const updateTask = (i,updateVal) => {
    console.log('update index', i)
    let array = [...todolist];
      array[i] = updateVal;
       setTodolist(array);
  }



  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={(e) => e.preventDefault()}>
              <Form.Label>Enter Your Tasks</Form.Label>
              <Form.Control value={inputTask} onChange={(e) => setInputTask(e.target.value)} type="text" placeholder="Please enter your tasks" />
            </Form.Group>
            <Button onClick={handleForm} variant="primary" type="submit">
              Add Todo
            </Button>
          </Form>
        </Col>
        {/* LIST TODOs */}
      </Row>
      <h3>Todo List</h3>
      {todolist.length > 0 ? todolist.map((v, i) => <ListTodo key={i} uniqueId={i} updateTask={updateTask} removeTask={removeTask} task={v}></ListTodo>) : 'No Task(s) found'}
      <Row>

      </Row>
    </Container>
  );
}

export default Todo;
