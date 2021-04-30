import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './SideBar.module.css';

const menuBar = {
    profilePage: { name: 'Profile', path: '/profile' },
    chatsPage: { name: 'Chats', path: '/chat/1' }
}

export default class SideBar extends React.Component {

    render() {
        return (
            <div className={s.sideBarWrapper}>
                <NavLink className={s.links} to={menuBar.profilePage.path}>Profile</NavLink>
                <NavLink className={s.links} to={menuBar.chatsPage.path}>Chats</NavLink>
            </div>
        )
    }
}