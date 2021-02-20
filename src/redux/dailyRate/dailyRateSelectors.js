const getCurrentDayInfo = state => state.user.summaries;
const getUserData = state => state.user.userData;

const dailyRateSelectors = { getCurrentDayInfo, getUserData };
export default dailyRateSelectors;
