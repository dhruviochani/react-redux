import * as types from "./tokenTypes";

const INITIAL_STATE = {token : ''}

export default (state = INITIAL_STATE, action) => {
    return {
        ...state,
        ...action.payload
    }
}