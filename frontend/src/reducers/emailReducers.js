import {
    CONTACT_EMAIL_FAIL,
    CONTACT_EMAIL_REQUEST,
    CONTACT_EMAIL_SUCCESS,
} from "../constants/emailConstants";

export const emailReducer = (state = {}, action) => {
    switch (action.type) {
        case CONTACT_EMAIL_REQUEST:
            return {
                loading: true,
            };
        case CONTACT_EMAIL_SUCCESS:
            return {
                loading: false,
                success: true,
                response: "Message sent successfully!",
            };
        case CONTACT_EMAIL_FAIL:
            return {
                loading: false,
                success: false,
                response: "Message sending failed, try later!",
            };
        default:
            return state;
    }
};
