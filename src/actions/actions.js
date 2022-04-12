import { 
    ADD_COMMENT,
    ADD_REPLY, 
    }from "./actionTypes";
export const addComment =(comment=null)=>{
    return{
        type:ADD_COMMENT,
        payload:comment
    }
}
export const addReply =(reply=null)=>{
    return{
        type:ADD_REPLY,
        payload:reply
    }
}