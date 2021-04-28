import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        name: PropTypes.string,
        lastName: PropTypes.string,
    };
    render() {
        const { chatId, name, lastName } = this.props;
        return (
            <div className='header header-flex'>

                {(chatId) ?
                    <>
                        <div>
                            Чат {this.props.chatId || 'Не выбран'}
                        </div>
                        <div className='header-title-flex'>
                            <div className='header-title__name'>
                                {name} {lastName}
                            </div>
                            <div>
                                <Link to={`/profile`}>
                                    Войти в профиль
                            </Link>
                            </div>
                        </div>
                    </>

                    : <>
                        <Link to={`/`}>
                            <div>
                                Открыть чаты
                            </div>
                        </Link>
                        <div className='header-title-flex'>
                            <div className='header-title__name'>
                                {name} {lastName}
                            </div>
                            <div>
                                Профиль
                            </div>
                        </div>
                    </>
                }

            </div>
        );
    }
}

const mapStateToProps = (store) => { /*Получаем State и передаем его в пропсы*/
    const { name, lastName } = store.profileReducer.userInfo;
    return {
        name: name,
        lastName: lastName,
    };
};

// const mapDispatchToProps = dispatch => bindActionCreators(
//     { userInfo },
//     dispatch); //Передаем экшен , который хотим вызвать

export default connect(mapStateToProps/*, mapDispatchToProps*/)(Header);