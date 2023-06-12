import UserActionType from "./user.actiontype";

const INITIAL_STATE = {
    currentUser: null,
    isHiddenProfile: true,
    isHiddenOverlay: true
};

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionType.EMAILSIGNIN:
            return{
                ...state,
                currentUser: action.payload
            };
        case UserActionType.TOGGLEPROFILE:
            return{
                ...state,
                isHiddenProfile: !state.isHiddenProfile
            };
        case UserActionType.TOGGLEOVERLAY:
            return{
                ...state,
                isHiddenOverlay: !state.isHiddenOverlay
            }
        default:
            return state;
    }
};

export default userReducer;