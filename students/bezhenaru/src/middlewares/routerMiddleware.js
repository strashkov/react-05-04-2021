import { goForward, goBack, push } from 'connected-react-router';
import { SEND_MESSAGE_SUCCESS } from '../actions/messageActions';

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE_SUCCESS:{
            const { author, text } = action.payload;    
            if (author === 'я') {
                if (text === 'Вперед') {
                    setTimeout(() => {
                        store.dispatch(goForward());
                    }, 500);
                }

                if (text === 'Назад') {
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
    }
    return next(action);
}
