import {
    ADD_COMMENT
   } from "../actions/actionTypes";

const initialstate = {
   comments : [null]
}

const commentReducer=(state=initialstate, action)=>{
   const {type,payload}=action
   switch(type){
       case ADD_COMMENT:
           return { ...state, comments: payload }
   }
}
export default commentReducer