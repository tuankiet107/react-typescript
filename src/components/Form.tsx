import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  users: Props['users'];
  setUsers: React.Dispatch<React.SetStateAction<Props['users']>>;
}

const Form = ({ users, setUsers }: IProps) => {
  const [user, setUser] = useState({ name: '', age: '', desc: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.name.trim() === '') {
      alert('Please enter name.');
      return 0;
    }
    if (user.age.trim() === '') {
      alert('Please enter age.');
      return 0;
    }
    if (user.desc.trim() === '') {
      alert('Please enter description.');
      return 0;
    }
    setUsers([
      ...users,
      {
        name: user.name,
        age: Number(user.age),
        desc: user.desc,
      },
    ]);
    setUser({ name: '', age: '', desc: '' });
  };

  return (
    <div className="form-component">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="input-name"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="number"
          id="input-age"
          placeholder="Age"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <textarea
          name="desc"
          id="input-desc"
          placeholder="Description"
          value={user.desc}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
