import React, { useState, useEffect, Fragment } from 'react'

// export class StateComponent extends React.Component {
export default class StateComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Corin',
      age: 21,
      width: window.innerWidth
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
    this.handleWindowResize = this.handleWindowResize.bind(this)
  }

  componentDidMount() {
    const { name, age } = this.state
    document.title = `${name} | ${age}`
    window.addEventListener('resize', this.handleWindowResize)
  }

  componentDidUpdate() {
    const { name, age } = this.state
    document.title = `${name} | ${age}`
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
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
    console.log('Before', this.state.age)
  }


  handleWindowResize() {
    this.setState({ width: window.innerWidth })
  }



  render() {
    const { name, age, width } = this.state;
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
          <span>Age: {age} </span>
          <button onClick={this.handleAgeChange}>Increment </button>
        </section>
        <section className='row'>
          <span>Name</span>
          <input
            type='text'
            value={width}
            disabled
          />
        </section>
      </Fragment>
    )
  }
}


// export default function StateFunctionComponent() {
export function StateFunctionComponent() {
  // TODO:  name & age change
  // TODO: update document title with name & age
  // TODO: useEffect()  width resize

  return (
    <Fragment>
      <section className='row'>
        <span>Name</span>
        <input
          type='text'
          value={}
          onChange={}
        />
      </section>
      <section className='row'>
        <span>Age: {} </span>
        <button onClick={}>Increment </button>
      </section>
      <section className='row'>
        <span>Name</span>
        <input
          type='text'
          value={}
          disabled
        />
      </section>
    </Fragment>
  )
}