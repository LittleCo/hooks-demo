import React, { useState, useEffect, Fragment } from 'react'

// export class StateComponent extends React.Component {
export default class StateComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Corin',
      age: 21
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleAgeChange() {

    this.setState({
      age: this.state.age + 1
    })

    // pass callback function 
    this.setState((state) => ({ age: state.age + 1}))
    this.setState((state) => ({ age: state.age + 1}))
    this.setState((state) => ({ age: state.age + 1}))
    
    console.log('Before', this.state.age)
  }


  render() {
    const { name } = this.state;
    return (
      <Fragment>
        <section className='row'>
          <span>Name</span>
          <input
            type='text'
            value={name}
            onChange={this.handleNameChange}
          />
        </section>
        <section className='row'>
          <span>Age: {this.state.age} </span>  
          <button onClick={this.handleAgeChange}>Increment </button>
        </section>
      </Fragment>
    )
  }
}


// export default function StateFunctionComponent() {
export function StateFunctionComponent() {
  // TODO:  name & age 
  

  return (
    <Fragment>
      <section className='row'>
        <span>Name</span>
        <input
          type='text'
          value={name}
          onChange={handleNameChange}
        />
      </section>
      <section className='row'>
          <span>Age: {age} </span>  
          <button onClick={handleAgeChange}>Increment </button>
        </section>
    </Fragment>
  )
}