import { schema } from "normalizr";

export const messages = new schema.Entity("messages");

export const messagesField = new schema.Entity("messagesField");

export const chats = new schema.Entity("chats", {
    messageList: [messages],
});

export const profile = new schema.Entity("profile");