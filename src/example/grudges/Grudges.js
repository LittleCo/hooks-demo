import React from 'react';
import Grudge from './Grudge';
import { GrudegContext } from './GrudgeContext';

const Grudges = () => {
  const { grudges } = React.useContext(GrudegContext)

  return (
    <section className="Grudges">
      <h2>Grudges ({grudges.length})</h2>
      {grudges.map(grudge => (
        <Grudge key={grudge.id} grudge={grudge} />
      ))}
    </section>
  );
};

export default Grudges;
