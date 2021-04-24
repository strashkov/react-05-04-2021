const initialStore = {
  user: {
    firstName: "Filipp",
    lastName: "Romanovski",
    bio: "My Route to Santiago de Compostela",
    photo: "filipp-romanovski-eejet4GDlzc-unsplash.jpg",
  },
};

export default function profileReducer(store = initialStore) {
  return store;
}
