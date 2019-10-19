import React from 'react'

export const Text = (props) => {
  const { children, title } = props

  const style = {
    fontFamily: "'Rubik', sans-serif",
    fontSize: title ? '20px' : '14px',
    color: 'white',
    fontWeight: title ? '500' : '200'

  }

  return (
    <p style={style}>{children}</p>
  )
}
