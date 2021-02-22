const getCurrentDayInfo = state => state.user.summaries;
const getUserData = state => state.user.userData;
const getCalories = state => state.user.userData.dailyRate;
const getNotAllowedProducts = state => state.user.userData.notAllowedProducts;

const dailyRateSelectors = { getCurrentDayInfo, getUserData, getCalories, getNotAllowedProducts };
export default dailyRateSelectors;
