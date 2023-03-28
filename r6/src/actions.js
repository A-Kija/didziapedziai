import { NAVIGATE } from "./types";

export const navigate = to => {
    return {
        type: NAVIGATE,
        payload: {
            to
        }
    };
}