
import React from 'react';
import Counter from './containers/CounterContainers/Counter';
import AddCounter from './containers/CounterContainers/AddCounter';
import RemoveCounter from './containers/CounterContainers/RemoveCounter';
import ResetCounter from './containers/CounterContainers/ResetCounter';

const App = () => {
  return (
    <div className="container">
      <Counter></Counter><br />
      <div className="columns">
        <div className="column is-11">
          <AddCounter></AddCounter>
        </div>
        <div className="column auto">
          <RemoveCounter></RemoveCounter>
        </div>
        <div className="column auto">
          <ResetCounter></ResetCounter>
        </div>
      </div>
      </div>
  )
}
export default App;