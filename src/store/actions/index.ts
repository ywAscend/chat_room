import { ACTION_TYPES } from "./type";

export const addUser = (param:any):ActionParams => ({
    type: ACTION_TYPES.ADD_USER,
    payload:param
})