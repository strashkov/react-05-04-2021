import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header.jsx';
import '../styles/style.css';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userInfo } from '../actions/profileAction';

class Profile extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        lastName: PropTypes.string,
        middleName: PropTypes.string,
        country: PropTypes.string,
        city: PropTypes.string,
        years: PropTypes.string,
        userInfo: PropTypes.func.isRequired
    };
    state = {
        forSubmitDisable: true
    };

    handleInputChange = (event) => {
        this.props.userInfo(
            event.target.parentNode.children[0].value,
            event.target.parentNode.children[1].value,
            event.target.parentNode.children[2].value,
            event.target.parentNode.children[3].value,
            event.target.parentNode.children[4].value,
            event.target.parentNode.children[5].value,
        );
    };

    handleClickSubmit = (event) => {
        event.preventDefault();
        this.props.userInfo(
            event.target.parentNode.children[0].value,
            event.target.parentNode.children[1].value,
            event.target.parentNode.children[2].value,
            event.target.parentNode.children[3].value,
            event.target.parentNode.children[4].value,
            event.target.parentNode.children[5].value,
        );
        this.setState({
            forSubmitDisable: this.state.forSubmitDisable ? false : true

        });
    };

    render() {

        const { forSubmitDisable } = this.state;
        const { name, lastName, middleName, country, city, years } = this.props;

        return <Container className='layout'>
            <Header />
            <div className='content'>
                <div className='card-profile'>
                    <form className='form-flex'>
                        <input type='text'
                            disabled={forSubmitDisable}
                            value={name}
                            onChange={this.handleInputChange}
                            className='card-profile__input card-profile__input-activ' placeholder='Имя' />
                        <input type='text'
                            disabled={forSubmitDisable}
                            value={lastName}
                            onChange={this.handleInputChange}
                            className='card-profile__input card-profile__input-activ' placeholder='Фамилия' />
                        <input type='text'
                            disabled={forSubmitDisable}
                            value={middleName}
                            onChange={this.handleInputChange}
                            className='card-profile__input card-profile__input-activ' placeholder='Отчество' />
                        <input type='text'
                            disabled={forSubmitDisable}
                            value={country}
                            onChange={this.handleInputChange}
                            className='card-profile__input card-profile__input-activ' placeholder='Страна' />
                        <input type='text'
                            disabled={forSubmitDisable}
                            value={city}
                            onChange={this.handleInputChange}
                            className='card-profile__input card-profile__input-activ' placeholder='Город' />
                        <input type='text'
                            disabled={forSubmitDisable}
                            value={years}
                            onChange={this.handleInputChange}
                            className='card-profile__input card-profile__input-activ' placeholder='Лет' />
                        <input type='submit'
                            preventdefault="true"
                            onClick={this.handleClickSubmit}
                            className='' value='Изменить' />
                    </form>
                </div>
            </div>
        </Container >
    }
}

const mapStateToProps = (store) => { /*Получаем State и передаем его в пропсы*/
    const { name, lastName, middleName, country, city, years } = store.profileReducer.userInfo;
    return {
        name: name,
        lastName: lastName,
        middleName: middleName,
        country: country,
        city: city,
        years: years,
        userInfo: userInfo,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    { userInfo },
    dispatch); //Передаем экшен , который хотим вызвать

export default connect(mapStateToProps, mapDispatchToProps)(Profile);