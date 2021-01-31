import React from 'react';

const UserInput = props => {
  // the style has the limitation of no :hover...
  // solution later on another chapter
  const style = {
    backgroundColor: 'white',
    border: '2px solid black',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0.5rem',
    borderRadius: '13%',
  };
  return (
    <input
      style={style}
      type="text"
      value={props.username}
      onChange={props.change}
    />
  );
};
export default UserInput;
