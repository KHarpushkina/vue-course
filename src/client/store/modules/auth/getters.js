"use strict";

export default {
    getTokenId(state) {
		return state.user.token;
	},

	getUser(state) {
		return {
			id: state.user.id,
			firstName: state.user.firstName,
			lastName: state.user.lastName,
			email: state.user.email
		} 
	},
};