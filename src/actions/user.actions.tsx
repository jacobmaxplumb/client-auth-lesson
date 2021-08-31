import { signInWithPopup, UserCredential } from "firebase/auth";
import { auth, provider } from "../api/user.api";
import { User } from "../models/user";

export const USER_SIGNED_IN: string = 'User Signed In';

export const signInUser = () => (dispatch: any) => {
    signInWithPopup(auth, provider).then((result: UserCredential) => {
        dispatch(userSignedIn(new User(result.user)));
    })
}

export const userSignedIn = (user: User): {type: string, user: User} => {
    return {type: USER_SIGNED_IN, user};
}