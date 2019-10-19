import React from 'react'
import avatar from './avatar-emoji.png'

const basicStyles = {
  borderRadius: '50%',
  height: 120,
  width: 120
}

const absoluteStyles = {
  position: 'absolute',
  left: '-40px'
}

const styles = { ...basicStyles, ...absoluteStyles }

export const Avatar = (props) => {
  return (
    <img style={styles} src={avatar} />
  )
}
