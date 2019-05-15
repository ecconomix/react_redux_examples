import React from 'react';
import FormButton from './FormButtonComponent/FormButton.jsx';

export default class Counter extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const { addCounter, removeCounter, resetCounter } = this.props;
    return (
      <div className="cotainer">
        <h1>Counter component</h1>
        <div className="notification">
          <h2>{this.props.count}</h2>
        </div>
        <FormButton 
          title="Add" 
          handleClick={addCounter} 
        />
        <FormButton 
          title="Remove" 
          handleClick={removeCounter} 
        />
        <FormButton 
          title="Reset" 
          handleClick={resetCounter} 
        />
    </div>
    )
  }
};
