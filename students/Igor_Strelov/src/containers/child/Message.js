import React from 'react';

export const Message = ({ message }) => {
  return (
      <div style={{...styles.msgWrapper,
        justifyContent: message.autor !== 'bot' ? 'flex-end' : 'flex-start'
      }}>
        {message.autor !== 'bot' && <div style={styles.borderLeftView}></div>}
        <div style={{...styles.msgBox, backgroundColor: message.autor !== 'bot' ? '#68c6fe' : '#ff9ae9'} }>
          {message.msg}
        </div>
        {message.autor === 'bot' && <div style={styles.borderRightView}></div>}
      </div>
  )
}

const styles = {
  msgWrapper: {
    flexDirection: 'row',
    display: 'flex'
  },
  msgBox: {
    backgroundColor: '#13e2bc',
    width: '70%',
    height: 80,
    padding: 25,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    boxSizing: 'border-box'
  },
  borderRightView: {
    width: 20,
    height: 80,
    marginLeft: -10,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
  },
  borderLeftView: {
    width: 20,
    height: 80,
    marginRight: -10,
    backgroundColor: '#fff',
    borderBottomRightRadius: 10,
    zIndex: 1
  }
}
