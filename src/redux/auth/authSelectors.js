const isAuthenticated = state => state.auth.user.isAuth;
const getUserName = state => state.auth.user.username;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token.accessToken;
const authSelectors = {
    isAuthenticated,
    getUserName,
    getUserEmail,
    getToken,
};

export default authSelectors;
