import React, { useState, useEffect, useContext, Fragment } from 'react'
import { ThemeContext, LocaleContext } from '../context';

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
      <ThemeContext.Consumer>
        {({ theme }) => (
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
            <LocaleContext.Consumer>
              {({locale}) => (
                <section className={`row ${theme.dark}`}>
                  <span>Locale</span>
                  <input value={locale.local} disabled />
                </section>
              )}
            </LocaleContext.Consumer>
          </Fragment>

        )}
      </ThemeContext.Consumer>
    )
  }
}


// export default function StateFunctionComponent() {
  export function StateFunctionComponent() {
  // TODO:  name & age change

  // TODO: update document title with name & age

  // TODO: useEffect()  width resize 

  // TODO: refactor with customHooks

  // TODO: use Context


  return (
    <Fragment>
      <section className='row'>
        <span>Name</span>
        <input
          type='text'
        />
      </section>
      <section className='row'>
        <span>Age</span>
        <input
          type='text'
        />
      </section>
      <section className='row'>
        <span>Width</span>
        <input
          type='text'
          disabled
        />
      </section>
    </Fragment>
  )
}
