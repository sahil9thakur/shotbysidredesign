import {
    CONTACT_EMAIL_REQUEST,
    CONTACT_EMAIL_SUCCESS,
    CONTACT_EMAIL_FAIL,
} from "../constants/emailConstants";
import axios from "axios";

export const sendEmail = (name, email, message) => async (dispatch) => {
    try {
        dispatch({
            type: CONTACT_EMAIL_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.post(
            "/api/contact",
            { name, email, message },
            config
        );
        dispatch({
            type: CONTACT_EMAIL_SUCCESS,
            payload: data,
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: CONTACT_EMAIL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
