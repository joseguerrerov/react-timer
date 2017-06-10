//Dependencies
import React, { Component } from 'react'
import normalize from 'normalize.css'
import {StyleRoot} from 'radium'

//Components
import Holder from './Holder'

//Assets
import '../styles/main.css'


class App extends Component {
  render() {
    return (
    <StyleRoot>
      <Holder background="https://source.unsplash.com/random"></Holder>
    </StyleRoot>
    )
  }
}

export default App
