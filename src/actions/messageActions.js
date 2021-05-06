import { createAction } from "redux-api-middleware";
import { normalize } from "normalizr";
import { messages } from "../utils/schemes";

export const LOAD_MESSAGES_REQUEST = "@@chat/LOAD_MESSAGES_REQUEST";
export const LOAD_MESSAGES_SUCCESS = "@@chat/LOAD_MESSAGES_SUCCESS";
export const LOAD_MESSAGES_ERROR = "@@chat/LOAD_MESSAGES_ERROR";

export const SEND_MESSAGE_REQUEST = '@@chat/SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = '@@chat/SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_ERROR = '@@chat/SEND_MESSAGE_ERROR';

export const DELETE_MESSAGE_REQUEST = "@@chat/DELETE_MESSAGE_REQUEST";
export const DELETE_MESSAGE_SUCCESS = "@@chat/DELETE_MESSAGE_SUCCESS";
export const DELETE_MESSAGE_ERROR = "@@chat/DELETE_MESSAGE_ERROR";

export const loadMessages = () => {
    return createAction({
        endpoint: "/api/messages",
        method: "GET",
        types: [
            LOAD_MESSAGES_REQUEST,
            {
                type: LOAD_MESSAGES_SUCCESS,
                payload: async (action, state, res) => {
                    const json = await res.json();

                    return normalize(json, [messages]);
                },
            },
            LOAD_MESSAGES_ERROR,
        ],
    });
};

export const sendMessage = ({ id, text, sender, chatId }) => {
    return createAction({
        endpoint: "/api/messages",
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ id, text, sender, chatId }),
        types: [
            SEND_MESSAGE_REQUEST,
            {
                type: SEND_MESSAGE_SUCCESS,
                payload: { id, text, sender, chatId }
            },
            SEND_MESSAGE_ERROR
        ]
    });
};

export const deleteMessage = (id) => {
    return createAction({
        endpoint: `/api/messages/chatId${id}`,
        method: "DELETE",
        types: [
            {
                type: DELETE_MESSAGE_REQUEST,
                payload: { id }
            },
            {
                type: DELETE_MESSAGE_SUCCESS,
                payload: { id }
            },
            DELETE_MESSAGE_ERROR
        ]
    });
};