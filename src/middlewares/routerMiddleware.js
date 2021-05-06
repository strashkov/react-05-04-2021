import { goForward, goBack, push } from 'connected-react-router';
import { SEND_MESSAGE_REQUEST } from '../actions/messageActions';

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE_REQUEST:
            if (action.sender === 'me') {
                if (action.text === 'Вперед') {
                    setTimeout(() => {
                        store.dispatch(goForward());
                    }, 500);
                }

                if (action.text === 'Назад') {
                    setTimeout(() => {
                        store.dispatch(goBack());
                    }, 500);
                }

                const chatId = (/Чат (\d)/.exec(action.text) || [])[1];

                if (chatId) {
                    store.dispatch(push(`/chat/${chatId}`));
                }
            }
    }
    return next(action);
}