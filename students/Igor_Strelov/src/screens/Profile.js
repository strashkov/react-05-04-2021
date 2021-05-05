import React, { useContext } from 'react';
import avatar from '../assets/images/avatar.jpg'
import {AppContext} from '../context/app/AppContext';

export const Profile = ({name='Igor Strelov'}) => {
  const { msgCount, myLastMessages, botLastMessages } = useContext(AppContext)
  const styles = {
    wrapper: {
      borderRadius: 25,
      backgroundColor: '#E2E2E2',
      opacity: .8,
      flex: 1,
      margin: 30,
      padding: 30,
      display: 'flex',
      flexDirection: 'row',
      height: '100%'
    },
    block: {
      backgroundColor: '#fff',
      flex: 1,
      borderRadius: 25,
      padding: 25,
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    blocksWrapper: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    verticalDevider:{
      width: 30,
      height: '100%'
    },
    horizontalDevider:{
      height: 30,
      width: '100%'
    },
    avatar: {
      maxWidth: '50%',
      maxHeight: '50%',
      flex: 1,
      marginBottom: 15,
    },
    nickname: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    value: {
      marginLeft: 5,
      fontSize: 18,
      fontWeight: '100'
    },
    fieldWrapper: {
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between'
    },
    msgWrapper: {
      overflowY: 'scroll',
      width: '60%',
      marginTop: 20,
    }
  }
  return (
      <div style={styles.wrapper}>
        <div style={styles.block}>
          <img src={avatar} style={styles.avatar}/>
          <div style={styles.fieldWrapper}>
            <span style={styles.nickname}>Мой никнейм:</span>
            <span style={styles.value}>{name}</span>
          </div>
          <div style={styles.fieldWrapper}>
            <span style={styles.nickname}>Количество сообщений:</span>
            <span style={styles.value}>{msgCount}</span>
          </div>
        </div>
        <div style={styles.verticalDevider}></div>
        <div style={styles.blocksWrapper}>
          <div style={{...styles.block, maxHeight: '50%', height: '50%'}}>
            <span style={styles.value}>Мои последние сообщения</span>
            <div style={styles.msgWrapper}>
            {myLastMessages.map((item, index) => {
              return <div key={item.msg + index} style={styles.fieldWrapper}>
                <span style={styles.nickname}>{item.autor}:</span>
                <span style={styles.value}>{item.msg}</span>
              </div>
            })}
            </div>
          </div>
          <div style={styles.horizontalDevider}></div>
          <div style={{...styles.block, maxHeight: '50%'}}>
            <span style={styles.value}>Последние ответы</span>
            <div style={styles.msgWrapper}>
              {botLastMessages.map((item, index) => {
                return <div key={item.msg + index} style={styles.fieldWrapper}>
                  <span style={styles.nickname}>{item.autor}:</span>
                  <span style={styles.value}>{item.msg}</span>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
  )
}
