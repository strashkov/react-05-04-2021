import React from "react";
import PropTypes from "prop-types";

export default class Profile extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
    };

    render() {
        return (
            <div>
                <h1>Ник:</h1>
                <h1>ФИО:</h1>                
            </div>
        );
    }
}