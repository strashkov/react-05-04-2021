import React from "react";
import PropTypes from "prop-types";

export default class Profile extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
    };

    render() {
        const { chatId } = this.props;
        return (
            <>
                <h1>Name:</h1>
                <h1>Second Name:</h1>
                <h2>code</h2>
            </>
        );
    }
}