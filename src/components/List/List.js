import React from 'react';
import {Button, Col, ListGroup, ListGroupItem, Row} from 'reactstrap';

const List = (props) => {
  return (
      <ListGroup>
        {Object.keys(props.tasks).map(id=> (
          <ListGroupItem key={id} style={{cursor: 'pointer'}}>
            <Row xs="2">
              <Col>
                <span onClick={()=>props.onClick(id)}
                      style={{textDecoration: props.tasks[id].completed ? "line-through" : "" }}>
                      {props.tasks[id].text}
                </span>
              </Col>
              <Col>
                <Button onClick={()=>props.deleteTask(id)}>Delete</Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
  );
};

export default List;