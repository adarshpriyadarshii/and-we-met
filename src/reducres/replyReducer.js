import {
    ADD_REPLY
   } from "../actions/actionTypes";

const initialstate = {
   replies : [null]
}

const replyReducer=(state=initialstate, action)=>{
   const {type,payload}=action
   switch(type){
       case ADD_REPLY:
           return { ...state, replies: payload }
   }
}
export default replyReducer