import React, { Component } from 'react'
import { Text } from './components/Text'
import { Avatar } from './components/Avatar'

const layoutStyles = {
  display: 'flex',
  overflow: 'auto',
  height: '100vh'
}
const rightSide = {
  height: '100vh',
  position: 'fixed',
  background: '#79B4A9',
  right: 0,
  width: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}

const leftSide = {
  height: '200vh',
  background: '#D7F2BA',
  flexGrow: '4'
}

const section = {
  height: '50vh',
  borderBottom: '2px solid white'
}

class App extends Component {
  render () {
    return (
      <div style={layoutStyles}>
        <div style={leftSide}>
          <div style={section} />
          <div style={section} />
          <div style={section} />
        </div>
        <div style={rightSide}>
          <Avatar />
          <Text title>Carlos P. Jimeno</Text>
        </div>
      </div>
    )
  }
}

export default App
