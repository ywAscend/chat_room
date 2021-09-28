
import { ACTION_TYPES } from "../actions/type"

const initState: IState = {
    socket: '',
    userInfo:{},
    avator:''
}

const socketReducer = (state = initState, action: ActionParams) => {
    switch(action.type){
        case  ACTION_TYPES.ADD_USER:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export default socketReducer