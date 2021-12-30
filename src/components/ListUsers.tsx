import React from 'react';
import { IState as Props } from '../App';

const ListUsers = ({ users }: Props) => {
  const renderUsers = () => {
    return users.map((item, index) => {
      return (
        <div className="list-item-container" key={index}>
          {item.name} - {item.age} - {item.desc}
        </div>
      );
    });
  };
  return (
    <div className="list-component">
      <h2>Users</h2>
      {renderUsers()}
    </div>
  );
};

export default ListUsers;
