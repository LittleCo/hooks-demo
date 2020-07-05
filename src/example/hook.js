import React, { useState, useEffect, useContext, Fragment } from 'react'
import { ThemeContext, LocaleContext } from '../context';

export class StateComponent extends React.Component {
  // export default class StateComponent extends React.Component {
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


export default function StateFunctionComponent() {
  // export function StateFunctionComponent() {
  // TODO:  name & age change

  // TODO: update document title with name & age


  // TODO: useEffect()  width resize 



  // TODO: refactor with customHooks
  const name = useFormInput('corin')
  const age = useFormInput(21)
  const width = useWindowWidth(window.innerWidth)
  useDocumentTitle(name.value + ' | ' + age.value)

  // TODO: use Context
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)

  return (
    <Fragment>
      <section className='row'>
        <span>Name</span>
        <input
          type='text'
          {...name}
        />
      </section>
      <section className='row'>
        <span>Age</span>
        <input
          type='text'
          {...age}
        />
      </section>
      <section className='row'>
        <span>Width</span>
        <input
          type='text'
          value={width}
          disabled
        />
      </section>
      <section className={`row ${theme.dark}`}>
        <span>Local</span>
        <input
          type='text'
          value={locale.local}
          disabled
        />
      </section>
    </Fragment>
  )
}

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  })
}

export function useFormInput(initialState) {
  const [value, setValue] = useState(initialState)
  function handleChange(e) {
    setValue(e.target.value)
  }
  return { value, onChange: handleChange }
}

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  const handleResizeWindow = () => { setWidth(window.innerWidth) }
  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow)
    return () => { window.removeEventListener('resize', handleResizeWindow) }
  })
  return width
}
