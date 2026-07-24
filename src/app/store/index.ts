import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            auth_token: ''
        }
    },
    mutations: {
        setToken (state, token) {
            state.auth_token = token
        }
    }
});

export default store;