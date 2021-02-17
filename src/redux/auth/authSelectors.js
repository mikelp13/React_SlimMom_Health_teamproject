const isAuthenticated = state => state.auth.user.isAuth;
const getUserName = state => state.auth.user.username;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token.accessToken;
const getUserId = state => state.auth.user.id
const authSelectors = {
    isAuthenticated,
    getUserName,
    getUserEmail,
    getToken,
    getUserId
};

export default authSelectors;
