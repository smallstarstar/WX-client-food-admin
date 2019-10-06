const userInfoMessage = {
    state: {
        userMessage: null,
    },

    mutations: {
        USER_INFO_MESSAGE(state: any, userInfoMessage: any) {
            state.userMessage = userInfoMessage;
        }
    },

    actions: {
        setUserInfoMessage({ commit }: any, userInfoMessage: any) {
            commit('USER_INFO_MESSAGE', userInfoMessage)
        }
    }
}


export default userInfoMessage;