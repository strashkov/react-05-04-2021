import * as axios from 'axios';

const CHATS_URL = 'chats.json';
const PROFILE_URL = 'profile.json';

const instance = axios.create({
  baseURL:
    'https://messenger-40e60-default-rtdb.europe-west1.firebasedatabase.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});
export const chatsAPI = {
  loadChats: () =>
    instance
      .get(CHATS_URL)
      .then(response =>
        response.data?.map(chat =>
          chat.messages ? chat : { ...chat, messages: [] }
        )
      ),
  uploadChats: chats => instance.put(CHATS_URL, chats),
};

export const profileAPI = {
  loadProfile: () => instance.get(PROFILE_URL).then(response => response.data),
};
