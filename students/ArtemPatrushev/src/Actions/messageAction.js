export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = ({messageId, text, author, chatId}) => {
    console.log(chatId);
    return ({
        type: SEND_MESSAGE,
        messageId,
        text,
        author,
        chatId
    });
}
