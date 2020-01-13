import React from 'react';
import {Input, ListGroup, ListGroupItem} from 'reactstrap';

const List = (props) => {
  return (
      <ListGroup>

        {Object.keys(props.tasks).map(id=> (
        <ListGroupItem key={id} onClick={props.onClick}>
            {props.tasks[id].text}
          </ListGroupItem>
        ))}
      </ListGroup>
  );
};

export default List;