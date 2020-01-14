import React from 'react';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';

const List = (props) => {
  return (
      <ListGroup>
        {Object.keys(props.tasks).map(id=> (
        <ListGroupItem key={id} >
          <span onClick={()=>props.onClick(id)}
                style={{textDecoration: props.tasks[id].completed ? "line-through" : "" }}>
            {props.tasks[id].text}
          </span>
          <Button onClick={()=>props.deleteTask(id)}>Delete</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
  );
};

export default List;