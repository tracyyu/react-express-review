import React from 'react';

const ListEntry = props => (
  <div onClick={() => props.deleteTodo(props.index)}>
    {props.name}
  </div>
);

export default ListEntry;
