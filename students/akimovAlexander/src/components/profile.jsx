import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Avatar } from '@material-ui/core';
import '../styles/style.css';

export default class Profile extends React.Component {
    static propTypes = {

    };
    state = {
        name: '',
        lastName: '',
        middleName: '',
        country: '',
        city: '',
        years: '',
        forSubmitDisable: 'true'
    };

    handleInputChange = (event) => {
        this.setState((state) => {
            return {
                name: event.target.parentNode.children[0].value,
                lastName: event.target.parentNode.children[1].value,
                middleName: event.target.parentNode.children[2].value,
                country: event.target.parentNode.children[3].value,
                city: event.target.parentNode.children[4].value,
                years: event.target.parentNode.children[5].value
            }
        });
    };

    handleClickSubmit = (event) => {
        event.preventDefault();
        this.setState({
            forSubmitDisable: this.state.forSubmitDisable ? false : true

        });
    };

    render() {

        const { name } = this.state;
        const { lastName } = this.state;
        const { middleName } = this.state;
        const { country } = this.state;
        const { city } = this.state;
        const { years } = this.state;
        const { forSubmitDisable } = this.state;

        return <Container className='layout'>
            <div className='header header-flex'>
                <Link to={`/`}>
                    <div>
                        Открыть чаты
                       </div>
                </Link>
                <div>
                    Профиль
            </div>
            </div>
            <div className='content'>
                <div className='card-profile'>
                    <Avatar src='' className='form-avatar' />
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
                        <div className="form__radio">
                            <input
                                disabled={forSubmitDisable}
                                id="radio-1" type="radio" name="radio" value="Мужчина" defaultChecked />
                            <label htmlFor="radio-1">Мужчина</label>
                            <input
                                disabled={forSubmitDisable}
                                id="radio-2" type="radio" name="radio" value="Женщина" />
                            <label htmlFor="radio-2">Женщина</label>
                        </div>
                        <input type='submit'
                            preventdefault="true"
                            onClick={this.handleClickSubmit}
                            className='' value='Изменить' />
                    </form>
                    {/* <input type="file" /> */}
                </div>
            </div>

        </Container >


    }

}