import React, { useState, useEffect } from 'react'
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
  height: '100%',
  flexGrow: '1'
}

const section = {
  height: '50vh',
  background: '#D7F2BA',
  borderBottom: '2px solid white'
}

const App = (props) => {
  const [scroll, setScroll] = useState(0)

  const handler = (e) => {
    setScroll(e.target.scrollTop)
  }

  useEffect(() => {
    document.addEventListener('scroll', handler, true)
    return () => {
      document.removeEventListener('scroll', handler)
    }
  }, [])

  return (
    <div style={layoutStyles}>
      <div style={leftSide}>
        <div style={section} />
        <div style={section} />
        <div style={section} />
        <div style={section} />
        <div style={section} />
      </div>
      <div style={rightSide}>
        <Avatar scroll={scroll} />
        <Text title>Carlos P. Jimeno</Text>
      </div>
    </div>
  )
}

//     const height = e.target.scrollTop

export default App
