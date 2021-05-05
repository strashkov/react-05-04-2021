import { schema } from 'normalizr';

export const messages = new schema.Entity('messages');
export const profileData = new schema.Entity('profile');
export const chats = new schema.Entity('chats', {
   messageList: [messages],
});