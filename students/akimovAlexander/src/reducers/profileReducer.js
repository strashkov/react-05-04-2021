import { USER_INFO } from '../actions/profileAction';

const initialStore = {
    userInfo: {
        name: 'Александр',
        lastName: 'Акимов',
        middleName: '',
        country: '',
        city: '',
        years: '',
    }
};

export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case USER_INFO: {
            const { name, lastName, middleName, country, city, years, } = action;
            return {
                userInfo: {
                    ...store.chats,
                    name,
                    lastName,
                    middleName,
                    country,
                    city,
                    years,
                },
            }
        }
        default:
            return store;
    }
}