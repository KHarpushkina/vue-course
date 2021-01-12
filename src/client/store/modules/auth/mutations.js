"use strict";

export default {
    loginUser(state, data) {
        state.user.expiresIn = data.token.expiresIn;
        state.user.token = data.token.token;
        state.user.email = data.token.signed_user.email;
        state.user.id = data.token.signed_user._id;
    },
};
