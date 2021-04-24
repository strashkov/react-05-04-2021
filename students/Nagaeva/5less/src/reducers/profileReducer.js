const initialStore = {
    user: {
        name: "Rick Sanchez",
        bio: "Genius scientist"
    },
};

export default function profileReducer(store = initialStore) {
    return store;
}