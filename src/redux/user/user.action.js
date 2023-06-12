import UserActionType from "./user.actiontype";

export const emailSignIn = user => ({
    type: UserActionType.EMAILSIGNIN,
    payload: user
});

export const toggleProfile = () => ({
    type: UserActionType.TOGGLEPROFILE
});

export const toggleOverlay = () => ({
    type: UserActionType.TOGGLEOVERLAY
})