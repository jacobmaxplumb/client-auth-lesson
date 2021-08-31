import { USER_SIGNED_IN } from "../actions/user.actions";
import { User } from "../models/user";

const initialState: User = new User();

export const userReducer = (state: any = initialState, action: any): any => {
    switch(action.type) {
        case USER_SIGNED_IN:
            return {...state, ...action.user};
        default:
            return state;
    }
}