"use strict";

export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  }
};