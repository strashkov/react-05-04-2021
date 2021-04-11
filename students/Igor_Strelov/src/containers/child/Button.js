import React from 'react';

export const Button = ({ children, style = styles.button, onPress }) => {
  return <button onClick={() => onPress()} style={style}>{children}</button>
}

const styles = {
  button: {
    backgroundColor: '#9affb0'
  },
  height: 40
}
