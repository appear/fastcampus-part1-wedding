import React from 'react'
import logo from './logo.svg'
import './App.css'

import classNames from 'classnames/bind'

import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  return (
    <div className={cx('container')}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
