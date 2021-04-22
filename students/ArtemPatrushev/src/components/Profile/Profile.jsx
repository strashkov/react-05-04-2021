import React from 'react';
import s from './Profile.module.css';
import Header from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';

export default class Profile extends React.Component {

    render() {
        return (
            <div className={s.profileBack}>
                <Header />
                <div className={s.profileWrapper}>
                    <SideBar />
                    <div className={s.profileUser}>
                        <img src='http://artmisto.com/uploads/posts/2012-09/1347354556_jessicatrinhphoto1.jpeg' />
                        <div className={s.userInfo}>
                            <p>Name: Dmitry</p>
                            <p>Surname: Yep</p>
                            <p>Age: 29</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}