import React, { useState, useContext, createContext } from "react";

const UserContext = createContext([
  {
    name: 'corin',
    coins: 2,
  },
  obj => obj
])

const LevelFive = () => {
  const [user, setUser] = useContext(UserContext)

  return (
    <div>
      <h5>{`${user.name} have ${user.coins} coins.`}</h5>
      <button
        onClick={() => {
          setUser(Object.assign({}, user, { coins: user.coins + 1 }))
        }}
      >
        Increment +
      </button>
    </div>
  )
}


const LevelFour = () => (
  <div>
    <h4>fourth level</h4>
    <LevelFive />
  </div>
);

const LevelThree = () => (
  <div>
    <h3>third level</h3>
    <LevelFour />
  </div>
);

const LevelTwo = () => (
  <div>
    <h2>second level</h2>
    <LevelThree />
  </div>
);


const ContextComponent = () => {
  const userState = useState({
    name: 'Tom',
    coins: 3
  });

  return (
    <UserContext.Provider value={userState}>
      <h1>first level</h1>
      <LevelTwo />
    </UserContext.Provider>
  );
};

export default ContextComponent