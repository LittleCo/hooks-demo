import React from 'react';
// import State from './hooksDemo/State'
// import Effect from './hooksDemo/Effect'
import Ref from './hooksDemo/Ref'
import Memo from './hooksDemo/useMemo'
import CallBack from './hooksDemo/useCallback'
import LayoutEffect from './hooksDemo/useLayoutEffect'

// import StateComponent from './example/hook'

import GrudgeApplication from './example/grudges/Application'
import './App.css';
import './grudge.css'

function App() {
  return (
    <div className="App">
      {/* <StateComponent /> */}

      {/* <Ref />
      <hr />
      <Memo />
      <hr />
      <CallBack />
      <hr />
      <LayoutEffect /> */}
      <GrudgeApplication />
    </div>
  );
}

export default App;
