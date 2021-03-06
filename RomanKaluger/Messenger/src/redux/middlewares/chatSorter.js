import {setChats} from "../actions";
export const sortChatsMiddleware = store => next => action => {
    if(action.type === setChats().type){
       const chats = action.payload;
       chats.sort((a,b) => (a.lastMessage ? a.lastMessage.dateSend : -1) < (b.lastMessage ? b.lastMessage.dateSend : -1) ? 1 : -1);
    }
    return next(action);
};
