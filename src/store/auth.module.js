import localStorageService from "@/services/utils/localStorageService";


//mutations
export const MUTATION_SET_USERINFO_AND_TOKEN = "setUserInfoAndToken";
export const MUTATION_LOGOUT = "logOut";
export const MUTATION_UPDATE_ACCESS_TOKEN = "updateAccessToken";
//actions
export const ACTION_SET_USERINFO_AND_TOKEN = "setUserInfoAndToken";
export const ACTION_LOGOUT = "logOut";

const state = {
    userInfo: localStorageService.getUserInfo(),
    accessToken: localStorageService.getAccessToken(),
    refreshToken: localStorageService.getRefreshToken()
}

const getters = {
    isLoggedIn: (state) => {
        return !!state.accessToken;
    },
    userInfo: (state) => {
        return state.userInfo;
    },
}

const mutations = {
    [MUTATION_SET_USERINFO_AND_TOKEN](state, loginResponse) {
        localStorageService.setAccessToken(loginResponse.access);
        localStorageService.setRefreshToken(loginResponse.refresh);
        localStorageService.setUserInfo(loginResponse.profile);
        state.userInfo = loginResponse.profile;
        state.accessToken = loginResponse.access;
        state.refreshToken = loginResponse.refresh;
    },
    [MUTATION_LOGOUT](state) {
        state.userInfo = {};
        state.accessToken = null;
        state.refreshToken = null;
        localStorageService.removeAuthInfo()

    },
    [MUTATION_UPDATE_ACCESS_TOKEN](state, token){
        state.accessToken = token;
    }
};

const actions = {
    [ACTION_SET_USERINFO_AND_TOKEN](context, tokenResponse) {
        context.commit(MUTATION_SET_USERINFO_AND_TOKEN, tokenResponse);
    },
    [ACTION_LOGOUT](context) {
        context.commit(MUTATION_LOGOUT);
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
