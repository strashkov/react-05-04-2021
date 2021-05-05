const initialStore = {
    firstName: 'Dmitry',
    lastName: 'Yep',
    age: '29',
    photo: 'http://artmisto.com/uploads/posts/2012-09/1347354556_jessicatrinhphoto1.jpeg'
};


export default function profileReducer(store = initialStore) {
    return store;
}