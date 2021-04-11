import React from 'react';

export const Button = ({ children, style = styles.button, onPress, disabled }) => {
  console.log(disabled);
  return <button disabled={disabled} onClick={() => onPress()} style={style}>{children}</button>
}

const styles = {
  button: {
    backgroundColor: '#9affb0'
  },
  height: 40
}
