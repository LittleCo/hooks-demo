import React, { useState } from 'react';
import { GrudegContext } from './GrudgeContext';

const NewGrudge = React.memo(() => {
  const { addGrudge } = React.useContext(GrudegContext)

  const [person, setPerson] = useState('');
  const [reason, setReason] = useState('');

  console.log('render new Grudge')

  const handleChange = event => {
    event.preventDefault();
    addGrudge({ person, reason });
  };

  return (
    <form className="NewGrudge" addGrudge={handleChange}>
      <input
        className="NewGrudge-input"
        placeholder="Person"
        type="text"
        value={person}
        onChange={event => setPerson(event.target.value)}
      />
      <input
        className="NewGrudge-input"
        placeholder="Reason"
        type="text"
        value={reason}
        onChange={event => setReason(event.target.value)}
      />
      <input className="NewGrudge-submit button" type="submit" />
    </form>
  );
});

export default NewGrudge;
