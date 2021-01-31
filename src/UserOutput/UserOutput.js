import React from 'react';
import './UserOutput.css';
const UserOutput = props => {
  return (
    <div className="userOutput">
      <h1>{props.username}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        animi sunt dolore cum, doloremque assumenda, non rerum distinctio vel
        ab, ipsam nihil. Laborum aliquid blanditiis eius aut esse necessitatibus
        repellendus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        animi sunt dolore cum, doloremque assumenda, non rerum distinctio vel
        ab, ipsam nihil. Laborum aliquid blanditiis eius aut esse necessitatibus
        repellendus.
      </p>
    </div>
  );
};
export default UserOutput;
