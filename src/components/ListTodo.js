import { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

function ListTodo({ task,uniqueId,removeTask,updateTask }) {

    const [editMode, setEditMode] = useState(0)
    const [updateVal, setupdateVal] = useState('')

    const toogleEditMode = () => {
        setEditMode(!editMode)
        console.log('toogle edit mode')
    }

    const showModeRender = () => {
        return (
            <li style={{paddingBottom : '10px'}}>                
            {task}
        <Button onClick={() => removeTask(uniqueId)} style={{float : 'right'}} variant='warning' size="sm"> Remove</Button>

        <Button onClick={() => toogleEditMode()} style={{float : 'right'}} variant='primary' size="sm"> Edit</Button>
        </li>
        )
    }
    const editModeRender = () => {
        return (
            <>
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Current Value : {task}
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder='Please enter updated task'
              value={updateVal}
              onChange={(e) => setupdateVal(e.target.value) }
            />
          </InputGroup>
          <Button onClick={() => {
            updateTask(uniqueId,updateVal)
            toogleEditMode()
          } } variant='primary' size="sm">Update</Button>
          <Button onClick={() => toogleEditMode() } variant='primary' size="sm">Cancel</Button>
          </>
        )
    }

    return (
        <>
        {editMode ? editModeRender() : showModeRender()}

        </>
    );
}

export default ListTodo;
