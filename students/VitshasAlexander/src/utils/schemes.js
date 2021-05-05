import { schema } from "normalizr";

export const messages = new schema.Entity("messages");

export const chats = new schema.Entity("chats", {
  messageList: [messages],
});

export const user = new schema.Entity("user");
