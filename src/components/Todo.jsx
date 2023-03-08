import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodoTask, updateTodo } from '../store/reducers/todoSlice';
import ListTodo from './ListTodo';


function Todo() {
  const [inputTask, setInputTask] = useState('');
  const todolist = useSelector((state) => state.todo.todoList)
  const dispatch = useDispatch();

  const handleForm = (event) => {
    event.preventDefault()
    if (inputTask) {
      dispatch(addTodo(inputTask))
      setInputTask('');
    }

  }

  const removeTask = (i) => {
    dispatch(removeTodoTask(inputTask))
  }

  const updateTask = (i, updateVal) => {
    dispatch(updateTodo({
      index: i,
      value: updateVal
    }))
  }



  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={(e) => e.preventDefault()}>
              <Form.Label>Enter Your Tasks</Form.Label>
              <Form.Control value={inputTask}
                onChange={(e) => setInputTask(e.target.value)} type="text" placeholder="Please enter your tasks" />
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
